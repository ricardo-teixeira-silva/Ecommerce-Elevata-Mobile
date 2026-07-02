import { db } from "./database";

export async function runMigrations() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      productId INTEGER NOT NULL UNIQUE,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL,
      discountPercentage REAL NOT NULL,
      rating REAL NOT NULL,
      stock INTEGER NOT NULL,
      thumbnail TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS cart (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      productId INTEGER NOT NULL UNIQUE,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL,
      discountPercentage REAL NOT NULL,
      rating REAL NOT NULL,
      stock INTEGER NOT NULL,
      thumbnail TEXT NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 1
    );
  `);
}

/**
 * =============================================================================
 *                            DATABASE MIGRATIONS
 * =============================================================================
 *
 * Inicializa e mantém a estrutura do banco de dados.
 *
 * Responsabilidades:
 *
 * ✓ Criar as tabelas da aplicação, caso ainda não existam.
 * ✓ Executar migrações futuras da estrutura do banco.
 * ✓ Garantir que o banco esteja pronto antes de qualquer operação.
 *
 * -----------------------------------------------------------------------------
 * ➜ Estrutura do projeto
 * -----------------------------------------------------------------------------
 *
 * app/
 * └── _layout.tsx
 *
 * src/
 * └── providers/
 *     └── DatabaseInitializer.tsx
 *
 * -----------------------------------------------------------------------------
 * ➜ Onde é inicializado?
 * -----------------------------------------------------------------------------
 *
 * O componente `DatabaseInitializer` deve envolver a aplicação em
 * `app/_layout.tsx`, garantindo que as migrações sejam executadas
 * antes de qualquer acesso ao banco de dados.
 *
 * // app/_layout.tsx
 *
 * <DatabaseInitializer>
 *   <Stack screenOptions={{ headerShown: false }} />
 * </DatabaseInitializer>
 *
 * -----------------------------------------------------------------------------
 * ➜ Fluxo de inicialização
 * -----------------------------------------------------------------------------
 *
 * app/_layout.tsx
 *        │
 *        ▼
 * DatabaseInitializer
 *        │
 *        ▼
 * runMigrations()
 *        │
 *        ▼
 * Banco pronto para uso
 *
 * -----------------------------------------------------------------------------
 * ➜ Implementação
 * -----------------------------------------------------------------------------
 *
 * // src/providers/DatabaseInitializer.tsx
 *
 * useEffect(() => {
 *   async function initialize() {
 *     try {
 *       await runMigrations();
 *     } catch (error) {
 *       console.error(
 *         "Erro ao inicializar o banco de dados:",
 *         error
 *       );
 *     }
 *   }
 *
 *   initialize();
 * }, []);
 *
 * =============================================================================
 */
