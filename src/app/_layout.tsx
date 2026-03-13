import { Stack } from "expo-router";
import { AppProviders } from "../process/providers/AppProviders";

export const RootLayout = () => {
  return (
    <AppProviders>
      <Stack screenOptions={{ headerShown: false }} />
    </AppProviders>
  );
};

export default RootLayout;
