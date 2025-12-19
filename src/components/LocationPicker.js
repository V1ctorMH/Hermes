import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { locations } from "../data/campusMap";
import colors from "../theme/colors";


export default function LocationPicker({ label, onSelect }) {
return (
<View style={styles.container}>
<Text style={styles.label}>{label}</Text>
<View style={styles.box}>
<Picker onValueChange={v => onSelect(v ? Number(v) : null)}>
<Picker.Item label="Selecione..." value={null} />
{locations.map(loc => (
<Picker.Item key={loc.id} label={loc.name} value={loc.id} />
))}
</Picker>
</View>
</View>
);
}


const styles = StyleSheet.create({
container: { marginBottom: 12 },
label: { fontWeight: "bold", marginBottom: 4 },
box: {
borderWidth: 1,
borderColor: colors.border,
borderRadius: 12,
overflow: "hidden"
}
});
