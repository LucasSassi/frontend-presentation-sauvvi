import { StyleSheet, Text, View } from "react-native";
import { InfoCard } from "../../../shared/ui/InfoCard";
import type { User } from "../model/types";

interface UserDetailProps {
  errorMessage: string | null;
  isLoading: boolean;
  user: User | null;
}

export const UserDetail = ({
  errorMessage,
  isLoading,
  user
}: UserDetailProps) => {
  return (
    <InfoCard
      eyebrow="entity"
      title="Dados do Usuario"
      description="A entity concentra a representacao do dominio: nome, email e identificador."
    >
      {isLoading ? (
        <Text style={styles.supportingText}>Carregando usuario...</Text>
      ) : null}

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {user ? (
        <View style={styles.userCard}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.supportingText}>Email: {user.email}</Text>
          <Text style={styles.secondaryText}>Empresa: {user.company}</Text>
          <Text style={styles.userId}>ID: {user.id}</Text>
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
