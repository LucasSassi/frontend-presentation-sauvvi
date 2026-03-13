import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

interface InfoCardProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export const InfoCard = ({
  eyebrow,
  title,
  description,
  children
}: InfoCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {children ? <View style={styles.children}>{children}</View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(15, 23, 42, 0.72)",
    borderColor: "rgba(148, 163, 184, 0.18)",
    borderRadius: 28,
    borderWidth: 1,
    padding: 18
  },
  children: {
    gap: 12,
    marginTop: 16
  },
  description: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 24,
    marginTop: 8
  },
  eyebrow: {
    color: "#6ee7b7",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  title: {
    color: "#f8fafc",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 8
  }
});