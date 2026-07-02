import { db } from "../database";
import { FavoriteEntity } from "../types";

class FavoriteRepository {
  async getAll(): Promise<FavoriteEntity[]> {
    return db.getAllAsync<FavoriteEntity>(
      "SELECT * FROM favorites ORDER BY id DESC",
    );
  }

  async getByProductId(productId: number): Promise<FavoriteEntity | null> {
    return db.getFirstAsync<FavoriteEntity>(
      "SELECT * FROM favorites WHERE productId = ?",
      [productId],
    );
  }

  async isFavorite(productId: number): Promise<boolean> {
    const favorite = await this.getByProductId(productId);

    return favorite !== null;
  }

  async add(product: FavoriteEntity): Promise<void> {
    await db.runAsync(
      `
      INSERT OR IGNORE INTO favorites (
        productId,
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        thumbnail
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
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
      ],
    );
  }

  async remove(productId: number): Promise<void> {
    await db.runAsync("DELETE FROM favorites WHERE productId = ?", [productId]);
  }

  async clear(): Promise<void> {
    await db.execAsync("DELETE FROM favorites");
  }
}

export default new FavoriteRepository();

// uso:
/**
 * =============================================================================
 *                           FAVORITE REPOSITORY
 * =============================================================================
 *
 * Guia rápido de utilização do FavoriteRepository.
 *
 * Import:
 *
 * import favoriteRepository from "@/database/repositories/FavoriteRepository";
 *
 * -----------------------------------------------------------------------------
 * ➜ Adicionar aos favoritos
 * -----------------------------------------------------------------------------
 *
 * await favoriteRepository.add({
 *   productId: product.id,
 *   title: product.title,
 *   description: product.description,
 *   category: product.category,
 *   price: product.price,
 *   discountPercentage: product.discountPercentage,
 *   rating: product.rating,
 *   stock: product.stock,
 *   thumbnail: product.thumbnail,
 * });
 *
 * -----------------------------------------------------------------------------
 * ➜ Verificar se um produto é favorito
 * -----------------------------------------------------------------------------
 * Muito utilizado na tela de detalhes.
 *
 * const isFavorite = await favoriteRepository.isFavorite(product.id);
 *
 * console.log(isFavorite);
 *
 * -----------------------------------------------------------------------------
 * ➜ Buscar favorito pelo ID do produto
 * -----------------------------------------------------------------------------
 *
 * const favorite = await favoriteRepository.getByProductId(product.id);
 *
 * console.log(favorite);
 *
 * -----------------------------------------------------------------------------
 * ➜ Buscar todos os favoritos
 * -----------------------------------------------------------------------------
 * Muito utilizado na tela de favoritos.
 *
 * const favorites = await favoriteRepository.getAll();
 *
 * console.log(favorites);
 *
 * -----------------------------------------------------------------------------
 * ➜ Remover um favorito
 * -----------------------------------------------------------------------------
 *
 * await favoriteRepository.remove(product.id);
 *
 * -----------------------------------------------------------------------------
 * ➜ Limpar todos os favoritos
 * -----------------------------------------------------------------------------
 *
 * await favoriteRepository.clear();
 *
 * -----------------------------------------------------------------------------
 * ➜ Exemplo de uso na Home
 * -----------------------------------------------------------------------------
 *
 * const products = await productService.getProducts();
 * const favorites = await favoriteRepository.getAll();
 *
 * const favoriteIds = new Set(
 *   favorites.map(item => item.productId)
 * );
 *
 * const result = products.map(product => ({
 *   ...product,
 *   isFavorite: favoriteIds.has(product.id),
 * }));
 *
 * =============================================================================
 */
