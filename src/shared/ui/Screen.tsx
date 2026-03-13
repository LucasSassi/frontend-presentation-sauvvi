import type { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenProps {
  children: ReactNode;
}

export const Screen = ({ children }: ScreenProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backgroundGlowTop} />
      <View style={styles.backgroundGlowBottom} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundGlowBottom: {
    backgroundColor: "rgba(16, 185, 129, 0.08)",
    borderRadius: 180,
    bottom: -60,
    height: 220,
    position: "absolute",
    right: -80,
    width: 220
  },
  backgroundGlowTop: {
    backgroundColor: "rgba(56, 189, 248, 0.1)",
    borderRadius: 160,
    height: 240,
    left: -90,
    position: "absolute",
    top: -70,
    width: 240
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24
  },
  safeArea: {
    backgroundColor: "#020617",
    flex: 1
  },
  scrollContent: {
    flexGrow: 1
  }
});