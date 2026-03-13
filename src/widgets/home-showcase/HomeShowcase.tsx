import { StyleSheet, Text, View } from "react-native";
import { UserCard } from "../../entities/user/ui/UserCard";
import { useArchitectureDemo } from "../../features/demo-overview/model/useArchitectureDemo";
import { ArchitectureOverview } from "../../features/demo-overview/ui/ArchitectureOverview";
import { InfoCard } from "../../shared/ui/InfoCard";

export const HomeShowcase = () => {
  const { apiBaseUrl, errorMessage, isLoading, layers, runtime, user } =
    useArchitectureDemo();

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroEyebrow}>app</Text>
        <Text style={styles.heroTitle}>
          Feature-Sliced Design para demonstracao
        </Text>
        <Text style={styles.heroDescription}>
          Esta tela percorre todas as camadas da arquitetura para mostrar onde
          cada responsabilidade foi implementada no projeto Expo.
        </Text>
      </View>

      <InfoCard
        eyebrow="pages"
        title="HomePage"
        description="A page conecta o processo de bootstrap ao widget principal e decide o estado exibido pela rota inicial."
      />

      <ArchitectureOverview
        apiBaseUrl={apiBaseUrl}
        layers={layers}
        runtime={runtime}
      />

      <UserCard
        errorMessage={errorMessage}
        isLoading={isLoading}
        user={user}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16
  },
  hero: {
    backgroundColor: "#34d399",
    borderRadius: 32,
    padding: 20,
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.18,
    shadowRadius: 30
  },
  heroDescription: {
    color: "#0f172a",
    fontSize: 14,
    lineHeight: 24,
    marginTop: 12
  },
  heroEyebrow: {
    color: "#0f172a",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  heroTitle: {
    color: "#0f172a",
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 38,
    marginTop: 12
  }
});