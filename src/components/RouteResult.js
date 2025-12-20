import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import * as Speech from "expo-speech";

export default function Results({ route, from, to, mode }) {

  useEffect(() => {
    if (mode !== "visual") return;

    Speech.stop();

    if (!from || !to) {
      Speech.speak("Selecione a origem e o destino.", { language: "pt-BR" });
      return;
    }

    if (from === to) {
      Speech.speak("A origem e o destino não podem ser iguais.", { language: "pt-BR" });
      return;
    }

    if (!route) {
      Speech.speak("Nenhuma rota acessível encontrada.", { language: "pt-BR" });
      return;
    }

    let message = `Rota encontrada. Tempo estimado: ${route.time} minutos.`;

    if (route.warnings?.length) {
      message += ` Atenção: ${route.warnings.join(", ")}.`;
    }

    Speech.speak(message, { language: "pt-BR", rate: 0.9 });

  }, [route, from, to, mode]);


  if (!from || !to)
    return <Text style={styles.info}>Selecione a origem e o destino.</Text>;

  if (from === to)
    return <Text style={styles.error}>Origem e destino não podem ser iguais.</Text>;

  if (!route)
    return <Text style={styles.error}>Nenhuma rota acessível encontrada.</Text>;

  return (
    <View>
      <Text style={styles.title}>Resumo da rota</Text>
      <Text style={styles.time}>⏱️ {route.time} min</Text>

      {route.warnings?.length > 0 && (
        <View style={styles.warningBox}>
          {route.warnings.map((w, i) => (
            <Text key={i} style={styles.warning}>⚠️ {w}</Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "bold" },
  time: { marginBottom: 10 },
  info: { color: "#6B7280" },
  error: { color: "#DC2626", fontWeight: "600" },
  warningBox: {
    backgroundColor: "#FEF3C7",
    borderRadius: 12,
    padding: 10
  },
  warning: {
    color: "#92400E",
    fontWeight: "600"
  }
});
