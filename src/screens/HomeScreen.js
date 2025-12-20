import { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  StatusBar
} from "react-native";

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
    if (!from || !to || from === to) {
      setRoute(null);
      setStepIndex(0);
      return;
    }

    const possible = routes.filter(r => {
      if (r.from !== from || r.to !== to) return false;
      if (mode === "wheelchair") return r.type === "accessible";
      return true;
    });

    setRoute(possible[0] || null);
    setStepIndex(0);
  }, [from, to, mode]);

  useEffect(() => {
    setStepIndex(0);
  }, [route]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#1E3A8A" />

      <View style={styles.header}>
        <Text style={styles.title}>Campus Acessível</Text>
        <Text style={styles.subtitle}>
          Navegação inclusiva e eficiente dentro do campus
        </Text>
      </View>

      <View style={styles.mapContainer}>
        <CampusMap route={route} stepIndex={stepIndex} />
      </View>

      <View style={styles.cardHighlight}>
        <AccessibilityMode mode={mode} setMode={setMode} />
        <View style={styles.separator} />
        <LocationPicker label="Origem" onSelect={setFrom} />
        <LocationPicker label="Destino" onSelect={setTo} />
      </View>

      <View style={styles.cardSteps}>
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
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 16
  },
  header: {
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#1E3A8A"
  },
  subtitle: {
    fontSize: 16,
    color: "#64748B",
    marginTop: 4
  },
  mapContainer: {
    borderRadius: 28,
    overflow: "hidden",
    marginBottom: 24,
    backgroundColor: "#FFF"
  },
  cardHighlight: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 20
  },
  cardSteps: {
    backgroundColor: "#EFF6FF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 40,
    borderLeftWidth: 8,
    borderLeftColor: "#3B82F6"
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 15
  }
});
