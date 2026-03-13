import type { ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface AppButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onPress: () => void;
}

export const AppButton = ({
  children,
  disabled = false,
  onPress
}: AppButtonProps) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled ? styles.buttonPressed : null,
        disabled ? styles.buttonDisabled : null
      ]}
    >
      <Text style={styles.label}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#22c55e",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 12
  },
  buttonDisabled: {
    backgroundColor: "#475569"
  },
  buttonPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }]
  },
  label: {
    color: "#052e16",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 0.3
  }
});
