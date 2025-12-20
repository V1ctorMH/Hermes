import { View, Text, Pressable, StyleSheet } from "react-native";
import { useEffect } from "react";
import * as Speech from "expo-speech";

export default function RouteSteps({
  route,
  stepIndex,
  setStepIndex,
  mode,
  from,
  to
}) {

  useEffect(() => {
    if (mode !== "wheelchair") return;

    Speech.stop();

    if (!from && !to) {
      Speech.speak("Selecione a origem e o destino.", { language: "pt-BR" });
      return;
    }

    if (!from) {
      Speech.speak("Selecione a origem.", { language: "pt-BR" });
      return;
    }

    if (!to) {
      Speech.speak("Selecione o destino.", { language: "pt-BR" });
      return;
    }

    if (from === to) {
      Speech.speak(
        "A origem e o destino não podem ser iguais.",
        { language: "pt-BR" }
      );
      return;
    }

    if (!route) {
      Speech.speak(
        "Nenhuma rota acessível encontrada para este trajeto.",
        { language: "pt-BR" }
      );
      return;
    }

    const step = route.steps?.[stepIndex];
    if (!step) return;

    Speech.speak(
      `${step.text}. Faltam ${step.distance} metros.`,
      { language: "pt-BR", rate: 0.9 }
    );
  }, [from, to, route, stepIndex, mode]);


  if (!from && !to)
    return <Text style={styles.info}>Selecione a origem e o destino.</Text>;

  if (!from)
    return <Text style={styles.info}>Selecione a origem.</Text>;

  if (!to)
    return <Text style={styles.info}>Selecione o destino.</Text>;

  if (from === to)
    return (
      <Text style={styles.error}>
        A origem e o destino não podem ser iguais.
      </Text>
    );

  if (!route)
    return (
      <Text style={styles.error}>
        Nenhuma rota acessível encontrada.
      </Text>
    );

  const step = route.steps[stepIndex];

  return (
    <View>
      <Text style={styles.time}>⏱️ {route.time} min</Text>

      {route.warnings?.length > 0 && (
        <View style={styles.warningBox}>
          {route.warnings.map((w, i) => (
            <Text key={i} style={styles.warning}>
              ⚠️ {w}
            </Text>
          ))}
        </View>
      )}

      <Text style={styles.step}>{step.text}</Text>
      <Text style={styles.distance}>
        {step.distance} metros restantes
      </Text>

      {mode === "wheelchair" && (
        <Pressable
          style={styles.secondaryButton}
          onPress={() =>
            Speech.speak(
              `${step.text}. Faltam ${step.distance} metros.`,
              { language: "pt-BR" }
            )
          }
        >
          <Text style={styles.buttonText}>🔁 Repetir áudio</Text>
        </Pressable>
      )}

      {stepIndex < route.steps.length - 1 && (
        <Pressable
          style={styles.primaryButton}
          onPress={() => setStepIndex(i => i + 1)}
        >
          <Text style={styles.buttonText}>➡️ Próximo passo</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    color: "#475569",
    fontSize: 16
  },
  error: {
    color: "#DC2626",
    fontWeight: "600",
    fontSize: 16
  },
  time: {
    color: "#6B7280",
    marginBottom: 8
  },
  warningBox: {
    backgroundColor: "#FEF3C7",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12
  },
  warning: {
    color: "#92400E",
    fontWeight: "600"
  },
  step: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6
  },
  distance: {
    fontSize: 14,
    marginBottom: 12
  },
  primaryButton: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 12,
    marginTop: 8,
    alignItems: "center"
  },
  secondaryButton: {
    backgroundColor: "#E5E7EB",
    padding: 12,
    borderRadius: 12,
    marginTop: 8,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600"
  }
});
