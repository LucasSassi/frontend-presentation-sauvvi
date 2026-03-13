import { StyleSheet, Text, View } from "react-native";
import { InfoCard } from "../../../shared/ui/InfoCard";
import type { RuntimeConfig } from "../../../shared/config/runtime";
import type { ArchitectureLayer } from "../model/useArchitectureDemo";

interface ArchitectureOverviewProps {
  apiBaseUrl: string;
  layers: ArchitectureLayer[];
  runtime: RuntimeConfig;
}

export const ArchitectureOverview = ({
  apiBaseUrl,
  layers,
  runtime
}: ArchitectureOverviewProps) => {
  return (
    <InfoCard
      eyebrow="features"
      title="Architecture overview"
      description="A feature sintetiza a arquitetura e entrega para o widget os dados que precisam ser apresentados."
    >
      <View style={styles.runtimeCard}>
        <Text style={styles.runtimeLine}>
          App: <Text style={styles.runtimeValue}>{runtime.appName}</Text>
        </Text>
        <Text style={styles.runtimeLine}>
          Versao: <Text style={styles.runtimeValue}>{runtime.appVersion}</Text>
        </Text>
        <Text style={styles.runtimeLine}>
          Canal de update: <Text style={styles.runtimeValue}>{runtime.updateChannel}</Text>
        </Text>
        <Text style={styles.runtimeLine}>
          Deep link: <Text style={styles.runtimeValue}>{runtime.entryUrl}</Text>
        </Text>
        <Text style={styles.runtimeLine}>
          API base: <Text style={styles.runtimeValue}>{apiBaseUrl}</Text>
        </Text>
      </View>

      <View style={styles.layersList}>
        {layers.map((item) => {
          return (
            <View key={item.layer} style={styles.layerCard}>
              <Text style={styles.layerEyebrow}>{item.layer}</Text>
              <Text style={styles.layerRole}>{item.role}</Text>
              <Text style={styles.layerExample}>{item.example}</Text>
            </View>
          );
        })}
      </View>
    </InfoCard>
  );
};

const styles = StyleSheet.create({
  layerCard: {
    backgroundColor: "rgba(15, 23, 42, 0.56)",
    borderColor: "rgba(148, 163, 184, 0.18)",
    borderRadius: 20,
    borderWidth: 1,
    padding: 16
  },
  layerExample: {
    color: "#94a3b8",
    fontSize: 13,
    marginTop: 8
  },
  layerEyebrow: {
    color: "#6ee7b7",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  layerRole: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 8
  },
  layersList: {
    gap: 12
  },
  runtimeCard: {
    backgroundColor: "rgba(15, 23, 42, 0.56)",
    borderRadius: 20,
    gap: 8,
    padding: 16
  },
  runtimeLine: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 22
  },
  runtimeValue: {
    color: "#ffffff",
    fontWeight: "700"
  }
});