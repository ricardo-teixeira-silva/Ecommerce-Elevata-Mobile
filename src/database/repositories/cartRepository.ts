import { db } from "../database";
import { CartEntity } from "../types";

class CartRepository {
  async getAll(): Promise<CartEntity[]> {
    return db.getAllAsync<CartEntity>("SELECT * FROM cart ORDER BY id DESC");
  }

  async getByProductId(productId: number): Promise<CartEntity | null> {
    return db.getFirstAsync<CartEntity>(
      "SELECT * FROM cart WHERE productId = ?",
      [productId],
    );
  }

  async add(product: CartEntity): Promise<void> {
    const item = await this.getByProductId(product.productId);
    const quantity = item?.quantity ?? 1;

    await this.updateQuantity(product.productId, quantity + 1);

    await db.runAsync(
      `
      INSERT INTO cart (
        productId,
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        thumbnail,
        quantity
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        product.productId,
        product.title,
        product.description,
        product.category,
        product.price,
        product.discountPercentage,
        product.rating,
        product.stock,
        product.thumbnail,
        product.quantity ?? 1,
      ],
    );
  }

  async updateQuantity(productId: number, quantity: number): Promise<void> {
    if (quantity <= 0) {
      await this.remove(productId);
      return;
    }

    await db.runAsync(
      `
      UPDATE cart
      SET quantity = ?
      WHERE productId = ?
      `,
      [quantity, productId],
    );
  }

  async remove(productId: number): Promise<void> {
    await db.runAsync("DELETE FROM cart WHERE productId = ?", [productId]);
  }

  async clear(): Promise<void> {
    await db.execAsync("DELETE FROM cart");
  }
}

export default new CartRepository();

/**
 * =============================================================================
 *                             CART REPOSITORY
 * =============================================================================
 *
 * Guia rápido de utilização do CartRepository.
 *
 * Import:
 *
 * import cartRepository from "@/database/repositories/CartRepository";
 *
 * -----------------------------------------------------------------------------
 * ➜ Adicionar um produto ao carrinho
 * -----------------------------------------------------------------------------
 * Se o produto já existir no carrinho, sua quantidade será incrementada.
 *
 * await cartRepository.add({
 *   productId: product.id,
 *   title: product.title,
 *   description: product.description,
 *   category: product.category,
 *   price: product.price,
 *   discountPercentage: product.discountPercentage,
 *   rating: product.rating,
 *   stock: product.stock,
 *   thumbnail: product.thumbnail,
 *   quantity: 1,
 * });
 *
 * -----------------------------------------------------------------------------
 * ➜ Buscar um item pelo ID do produto
 * -----------------------------------------------------------------------------
 *
 * const item = await cartRepository.getByProductId(product.id);
 *
 * console.log(item);
 *
 * -----------------------------------------------------------------------------
 * ➜ Buscar todos os itens do carrinho
 * -----------------------------------------------------------------------------
 * Muito utilizado na tela de carrinho.
 *
 * const items = await cartRepository.getAll();
 *
 * console.log(items);
 *
 * -----------------------------------------------------------------------------
 * ➜ Atualizar a quantidade de um item
 * -----------------------------------------------------------------------------
 * Se a quantidade for menor ou igual a 0, o item será removido do carrinho.
 *
 * await cartRepository.updateQuantity(product.id, 3);
 *
 * -----------------------------------------------------------------------------
 * ➜ Remover um item do carrinho
 * -----------------------------------------------------------------------------
 *
 * await cartRepository.remove(product.id);
 *
 * -----------------------------------------------------------------------------
 * ➜ Limpar todo o carrinho
 * -----------------------------------------------------------------------------
 *
 * await cartRepository.clear();
 *
 * -----------------------------------------------------------------------------
 * ➜ Exemplo de uso na tela do Carrinho
 * -----------------------------------------------------------------------------
 *
 * const cartItems = await cartRepository.getAll();
 *
 * const total = cartItems.reduce(
 *   (sum, item) => sum + item.price * item.quantity,
 *   0
 * );
 *
 * console.log(total);
 *
 * =============================================================================
 */
