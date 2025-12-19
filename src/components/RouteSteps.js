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
    if (mode !== "visual") return;

    Speech.stop();

    if (!from || !to) {
      Speech.speak("Selecione a origem e o destino.", { language: "pt-BR" });
      return;
    }

    if (!route) {
      Speech.speak("Não há rota acessível disponível.", { language: "pt-BR" });
      return;
    }

    const step = route.steps[stepIndex];
    Speech.speak(
      `${step.text}. Faltam ${step.distance} metros.`,
      { language: "pt-BR", rate: 0.9 }
    );
  }, [stepIndex, route, mode, from, to]);

  if (!from || !to)
    return <Text style={styles.info}>Selecione origem e destino.</Text>;

  if (!route)
    return <Text style={styles.error}>Nenhuma rota acessível encontrada.</Text>;

  const step = route.steps[stepIndex];

  return (
    <View>
      <Text style={styles.time}>⏱️ {route.time} min</Text>

      <Text style={styles.step}>{step.text}</Text>
      <Text style={styles.distance}>
         {step.distance} metros restantes
      </Text>

      {mode === "visual" && (
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
  time: {
    color: "#6B7280",
    marginBottom: 6
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
  },
  info: {
    color: "#6B7280"
  },
  error: {
    color: "#DC2626",
    fontWeight: "600"
  }
});
