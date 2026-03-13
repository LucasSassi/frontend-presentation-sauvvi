import type { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};