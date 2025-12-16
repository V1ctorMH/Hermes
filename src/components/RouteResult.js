import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function RouteSteps({ route, calculated }) {
  if (!calculated) return null;

  if (!route) {
    return (
      <Text style={styles.error}>
        ❌ Nenhuma rota acessível encontrada.
      </Text>
    );
  }

  return (
    <View>
      <Text style={styles.title}>Resumo</Text>
      <Text>⏱️ Tempo estimado: {route.time}</Text>

      <Text style={styles.stepsTitle}>Passo a passo</Text>
      {route.steps.map((s, i) => (
        <Text key={i} style={styles.step}>
          ➡️ {s}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontWeight: "bold", marginTop: 10 },
  stepsTitle: { fontWeight: "bold", marginTop: 12 },
  step: { marginTop: 4 },
  error: {
    color: colors.danger,
    fontWeight: "bold",
    marginTop: 10
  }
});
