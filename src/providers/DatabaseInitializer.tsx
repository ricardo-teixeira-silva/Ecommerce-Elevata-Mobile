import { PropsWithChildren, useEffect } from "react";
import { runMigrations } from "../database/migrations";

export function DatabaseInitializer({ children }: PropsWithChildren) {
  useEffect(() => {
    async function initialize() {
      try {
        await runMigrations();
      } catch (error) {
        console.error("Erro ao inicializar o banco de dados:", error);
      }
    }

    initialize();
  }, []);

  return <>{children}</>;
}
