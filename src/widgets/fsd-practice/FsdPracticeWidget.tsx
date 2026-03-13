import { StyleSheet, Text, View } from "react-native";
import { InfoCard } from "../../shared/ui/InfoCard";
import { UserCardWidget } from "../user-card-widget/UserCardWidget";

export const FsdPracticeWidget = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroEyebrow}>page + widgets</Text>
        <Text style={styles.heroTitle}>Demo pratica de FSD</Text>
        <Text style={styles.heroDescription}>
          Esta tela prova o papel de cada camada com interacao real: botao na
          feature, regra na entidade e composicao no widget.
        </Text>
      </View>

      <InfoCard
        eyebrow="widgets"
        title="UserCardWidget"
        description="Este widget agrupa Feature + Entity: controles de interacao e exibicao dos dados do usuario em um bloco reutilizavel."
      />

      <UserCardWidget />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16
  },
  hero: {
    backgroundColor: "#38bdf8",
    borderRadius: 28,
    padding: 20
  },
  heroDescription: {
    color: "#082f49",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8
  },
  heroEyebrow: {
    color: "#082f49",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.6,
    textTransform: "uppercase"
  },
  heroTitle: {
    color: "#082f49",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 10
  }
});
