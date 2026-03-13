import { View } from "react-native";
import { UserCard } from "../../entities/user/ui/UserCard";
import { useUserCycle } from "../../features/user-cycle/model/useUserCycle";
import { UserCycleControls } from "../../features/user-cycle/ui/UserCycleControls";

export const UserCardWidget = () => {
  const { currentUserId, errorMessage, isLoading, loadNextUser, user } =
    useUserCycle();

  return (
    <View style={{ gap: 16 }}>
      <UserCycleControls
        currentUserId={currentUserId}
        isLoading={isLoading}
        onLoadNextUser={loadNextUser}
      />

      <UserCard
        errorMessage={errorMessage}
        isLoading={isLoading}
        user={user}
      />
    </View>
  );
};