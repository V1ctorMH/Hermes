import { View, Text, Pressable } from "react-native";


export default function RouteSteps({ route, stepIndex, setStepIndex }) {
if (!route) {
return <Text>❌ Nenhuma rota acessível encontrada.</Text>;
}


return (
<View>
<Text>⏱️ Tempo estimado: {route.time} min</Text>


<Text style={{ fontWeight: "bold", marginTop: 10 }}>Passo atual</Text>
<Text>➡️ {route.steps[stepIndex]}</Text>


{route.warnings.length > 0 && (
<>
<Text style={{ fontWeight: "bold", marginTop: 10 }}>⚠️ Atenção</Text>
{route.warnings.map((w, i) => (
<Text key={i}>• {w}</Text>
))}
</>
)}


{stepIndex < route.steps.length - 1 && (
<Pressable
style={{ marginTop: 12 }}
onPress={() => setStepIndex(i => i + 1)}
>
<Text>➡️ Próximo passo</Text>
</Pressable>
)}
</View>
);
}