import { useEffect, useState } from "react";
import { getUser } from "../../../entities/user/api/getUser";
import type { User } from "../../../entities/user/model/types";
import { api } from "../../../shared/api/client";
import { runtimeConfig } from "../../../shared/config/runtime";

export interface ArchitectureLayer {
  layer: string;
  role: string;
  example: string;
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    layer: "app",
    role: "Configura entrada, rotas e providers globais.",
    example: "src/app/_layout.tsx"
  },
  {
    layer: "process",
    role: "Controla o bootstrap e o ciclo de inicialização.",
    example: "src/process/model/useAppReady.ts"
  },
  {
    layer: "pages",
    role: "Orquestra o conteúdo que a rota deve mostrar.",
    example: "src/pages/HomePage.tsx"
  },
  {
    layer: "widgets",
    role: "Agrupa blocos visuais completos da tela.",
    example: "src/widgets/home-showcase/HomeShowcase.tsx"
  },
  {
    layer: "features",
    role: "Agrupa comportamento reutilizável e casos de uso da UI.",
    example: "src/features/demo-overview/ui/ArchitectureOverview.tsx"
  },
  {
    layer: "entities",
    role: "Define domínio e representação do usuário carregado.",
    example: "src/entities/user/ui/UserCard.tsx"
  },
  {
    layer: "shared",
    role: "Centraliza infraestrutura, configs e componentes base.",
    example: "src/shared/ui/InfoCard.tsx"
  }
];

export const useArchitectureDemo = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      try {
        const data = await getUser("1");

        if (!isMounted) {
          return;
        }

        setUser(data);
      } catch {
        if (!isMounted) {
          return;
        }

        setErrorMessage("Nao foi possivel carregar o usuario de demonstracao.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    apiBaseUrl: api.defaults.baseURL ?? "",
    errorMessage,
    isLoading,
    layers: architectureLayers,
    runtime: runtimeConfig,
    user
  };
};