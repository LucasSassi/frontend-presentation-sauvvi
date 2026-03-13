import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useAppReady } from "../process/model/useAppReady";
import { Screen } from "../shared/ui/Screen";
import { UserCardWidget } from "../widgets/UserCard/UserCard";

export const HomePage = () => {
  const { isReady } = useAppReady();

  return (
    <Screen>
      <StatusBar style="light" />
      {isReady ? (
        <UserCardWidget />
      ) : (
        <View style={styles.loadingCard}>
          <ActivityIndicator color="#34d399" size="large" />
          <Text style={styles.loadingTitle}>
            Preparando a demonstração
          </Text>
          <Text style={styles.loadingDescription}>
            A camada process simula a inicialização do app antes de entregar a
            página principal.
          </Text>
        </View>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  loadingCard: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 24,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40
  },
  loadingDescription: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 24,
    marginTop: 8,
    textAlign: "center"
  },
  loadingTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16
  }
});
