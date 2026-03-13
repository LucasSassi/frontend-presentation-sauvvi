import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "../../../shared/ui/AppButton";
import { InfoCard } from "../../../shared/ui/InfoCard";

interface ChangeUserButtonProps {
  currentUserId: number;
  isLoading: boolean;
  onPress: () => void;
}

export const ChangeUserButton = ({
  currentUserId,
  isLoading,
  onPress
}: ChangeUserButtonProps) => {
  return (
    <InfoCard
      eyebrow="feature"
      title="Troca de Usuario"
      description="A feature controla a acao do botao e dispara a mudanca do usuario exibido no widget."
    >
      <View style={styles.container}>
        <Text style={styles.label}>Usuario atual: {currentUserId}</Text>
        <AppButton disabled={isLoading} onPress={onPress}>
          {isLoading ? "Carregando..." : "Carregar proximo usuario"}
        </AppButton>
      </View>
    </InfoCard>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12
  },
  label: {
    color: "#e2e8f0",
    fontSize: 14,
    fontWeight: "600"
  }
});
