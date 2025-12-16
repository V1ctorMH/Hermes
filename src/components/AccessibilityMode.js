import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../theme/colors";


export default function AccessibilityMode({ mode, setMode }) {
return (
<View>
<Text style={styles.label}>Modo de acessibilidade</Text>
<View style={styles.row}>
{[
{ key: "wheelchair", label: "♿ Cadeirante" },
{ key: "visual", label: "👁️ Visual" }
].map(item => (
<Pressable
key={item.key}
style={[styles.option, mode === item.key && styles.active]}
onPress={() => setMode(item.key)}
>
<Text style={[styles.text, mode === item.key && styles.activeText]}>
{item.label}
</Text>
</Pressable>
))}
</View>
</View>
);
}


const styles = StyleSheet.create({
label: { fontWeight: "bold", marginBottom: 8 },
row: { flexDirection: "row", gap: 10 },
option: {
flex: 1,
padding: 14,
borderRadius: 12,
backgroundColor: "#E5E7EB",
alignItems: "center"
},
active: { backgroundColor: colors.primary },
text: { fontWeight: "600" },
activeText: { color: "#fff" }
});