import { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";


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
return;
}


const possible = routes.filter(
r => r.from === from && r.to === to && r.mode === mode
);


if (possible.length === 0) {
setRoute(null);
} else {
possible.sort((a, b) => a.time - b.time);
setRoute(possible[0]);
setStepIndex(0);
}
}, [from, to, mode]);


return (
<ScrollView style={styles.container}>
<Text style={styles.title}>Campus Acessível ♿</Text>


<AccessibilityMode mode={mode} setMode={setMode} />
<LocationPicker label="Origem" onSelect={setFrom} />
<LocationPicker label="Destino" onSelect={setTo} />


<CampusMap show={!!route} />
<RouteSteps
route={route}
stepIndex={stepIndex}
setStepIndex={setStepIndex}
/>
</ScrollView>
);
}


const styles = StyleSheet.create({
container: { padding: 20 },
title: { fontSize: 26, fontWeight: "bold", marginBottom: 16 }
});