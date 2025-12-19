import { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

import AccessibilityMode from "../components/AccessibilityMode";
import LocationPicker from "../components/LocationPicker";
import CampusMap from "../components/CampusMap";
import RouteSteps from "../components/RouteSteps";

import { routes } from "../data/campusMap";

export default function HomeScreen() {
  const [mode, setMode] = useState("wheelchair");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [route, setRoute] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (!from || !to) {
      setRoute(null);
      setStepIndex(0);
      return;
    }

    const possible = routes.filter(
      r => r.from === from && r.to === to && r.mode === "wheelchair"
    );

    setRoute(possible[0] || null);
    setStepIndex(0);
  }, [from, to, mode]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Campus Acessível</Text>
      <Text style={styles.subtitle}>
        Navegação inclusiva dentro do campus
      </Text>

      <CampusMap route={route} stepIndex={stepIndex} />

      <View style={styles.card}>
        <AccessibilityMode mode={mode} setMode={setMode} />
        <LocationPicker label="Origem" onSelect={setFrom} />
        <LocationPicker label="Destino" onSelect={setTo} />
      </View>

      <View style={styles.card}>
        <RouteSteps
          route={route}
          stepIndex={stepIndex}
          setStepIndex={setStepIndex}
          mode={mode}
          from={from}
          to={to}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    padding: 16
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 12
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4
  }
});
