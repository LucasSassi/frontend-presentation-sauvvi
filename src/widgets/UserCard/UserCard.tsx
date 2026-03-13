import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getUser } from "../../entities/user/api/getUser";
import type { User } from "../../entities/user/model/types";
import { UserDetail } from "../../entities/user/ui/UserDetail";
import { ChangeUserButton } from "../../features/UserManagement/ui/ChangeUserButton";

const MAX_USER_ID = 10;
const MIN_USER_ID = 1;

export const UserCardWidget = () => {
  const [currentUserId, setCurrentUserId] = useState(MIN_USER_ID);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const data = await getUser(String(currentUserId));

        if (!isMounted) {
          return;
        }

        setUser(data);
      } catch {
        if (isMounted) {
          setErrorMessage("Nao foi possivel carregar o usuario selecionado.");
        }
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
  }, [currentUserId]);

  const handleChangeUser = () => {
    setCurrentUserId((previousId) => {
      if (previousId >= MAX_USER_ID) {
        return MIN_USER_ID;
      }

      return previousId + 1;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroEyebrow}>widget</Text>
        <Text style={styles.heroTitle}>UserCardWidget</Text>
        <Text style={styles.heroDescription}>
          O widget e o cerebro do bloco: junta a acao da feature com os dados da
          entity e organiza o layout interno.
        </Text>
      </View>

      <ChangeUserButton
        currentUserId={currentUserId}
        isLoading={isLoading}
        onPress={handleChangeUser}
      />

      <UserDetail
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
