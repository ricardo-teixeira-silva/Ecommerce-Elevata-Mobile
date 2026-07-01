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
 * Executa as migrações do banco de dados.
 *
 * Responsabilidades:
 * - Criar as tabelas da aplicação caso ainda não existam;
 * - Executar futuras migrações da estrutura do banco;
 * - Garantir que o banco esteja pronto antes de qualquer operação.
 *
 * Esta função deve ser executada apenas uma vez durante a inicialização
 * da aplicação. Neste projeto isso é feito pelo componente
 * `DatabaseInitializer`, utilizado no arquivo `app/_layout.tsx`
 * (Expo Router).
 *
 * @example
 * // app/_layout.tsx
 *
 *   <DatabaseInitializer>
 *     <Stack screenOptions={{ headerShown: false }} />
 *   </DatabaseInitializer>
 *
 * @example
 * // src/providers/
 * DatabaseInitializer.tsx
 *
 * import { PropsWithChildren, useEffect } from "react";
 * import { runMigrations } from "../database/migrations";
 *
 * export function DatabaseInitializer({
 *   children,
 * }: PropsWithChildren) {
 *   useEffect(() => {
 *     async function initialize() {
 *       try {
 *         await runMigrations();
 *       } catch (error) {
 *         console.error(
 *           "Erro ao inicializar o banco de dados:",
 *           error
 *         );
 *       }
 *     }
 *
 *     initialize();
 *   }, []);
 *
 *   return <>{children}</>;
 * }
 */
