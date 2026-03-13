import { StyleSheet, Text, View } from "react-native";
import { InfoCard } from "../../../shared/ui/InfoCard";
import type { User } from "../model/types";

interface UserCardProps {
  user: User | null;
  isLoading: boolean;
  errorMessage: string | null;
}

export const UserCard = ({
  user,
  isLoading,
  errorMessage
}: UserCardProps) => {
  return (
    <InfoCard
      eyebrow="entities"
      title="User entity"
      description="A entidade concentra a regra de representação do usuário e exibe os dados carregados pela feature."
    >
      {isLoading ? (
        <Text style={styles.supportingText}>Carregando usuário real da API...</Text>
      ) : null}

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      {user ? (
        <View style={styles.userCard}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.supportingText}>{user.email}</Text>
          <Text style={styles.secondaryText}>Empresa: {user.company}</Text>
          <Text style={styles.userId}>
            User ID: {user.id}
          </Text>
        </View>
      ) : null}
    </InfoCard>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "#fda4af",
    fontSize: 14
  },
  secondaryText: {
    color: "#94a3b8",
    fontSize: 14
  },
  supportingText: {
    color: "#cbd5e1",
    fontSize: 14
  },
  userCard: {
    backgroundColor: "rgba(15, 23, 42, 0.56)",
    borderRadius: 20,
    gap: 8,
    padding: 16
  },
  userId: {
    color: "#6ee7b7",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    marginTop: 4,
    textTransform: "uppercase"
  },
  userName: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700"
  }
});