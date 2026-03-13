import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "../../../shared/ui/AppButton";
import { InfoCard } from "../../../shared/ui/InfoCard";

interface UserCycleControlsProps {
  currentUserId: number;
  isLoading: boolean;
  onLoadNextUser: () => void;
}

export const UserCycleControls = ({
  currentUserId,
  isLoading,
  onLoadNextUser
}: UserCycleControlsProps) => {
  return (
    <InfoCard
      eyebrow="feature"
      title="Trocar usuario (caso de uso)"
      description="Feature com comportamento real: controla interacao, estado e aciona API para buscar o proximo usuario."
    >
      <View style={styles.row}>
        <Text style={styles.label}>Usuario atual: {currentUserId}</Text>
        <AppButton disabled={isLoading} onPress={onLoadNextUser}>
          {isLoading ? "Carregando..." : "Carregar proximo usuario"}
        </AppButton>
      </View>
    </InfoCard>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#e2e8f0",
    fontSize: 14,
    fontWeight: "600"
  },
  row: {
    gap: 12
  }
});
