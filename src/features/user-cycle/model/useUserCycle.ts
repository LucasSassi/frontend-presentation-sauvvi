import { useCallback, useEffect, useState } from "react";
import { getUser } from "../../../entities/user/api/getUser";
import type { User } from "../../../entities/user/model/types";

const MAX_USER_ID = 10;
const MIN_USER_ID = 1;

export const useUserCycle = () => {
  const [currentUserId, setCurrentUserId] = useState(MIN_USER_ID);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const loadUser = useCallback(async (id: number) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const data = await getUser(String(id));
      setUser(data);
    } catch {
      setErrorMessage("Nao foi possivel carregar o usuario selecionado.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser(currentUserId);
  }, [currentUserId, loadUser]);

  const loadNextUser = () => {
    setCurrentUserId((previousId) => {
      if (previousId >= MAX_USER_ID) {
        return MIN_USER_ID;
      }

      return previousId + 1;
    });
  };

  return {
    currentUserId,
    errorMessage,
    isLoading,
    loadNextUser,
    user
  };
};
