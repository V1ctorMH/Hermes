import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { locations } from "../data/campusMap";
import colors from "../theme/colors";

export default function LocationPicker({ label, value, onSelect, error }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={[
        styles.box,
        error && styles.boxError
      ]}>
        <Picker
          selectedValue={value}
          onValueChange={v => onSelect(v ? Number(v) : null)}
        >
          <Picker.Item label="Selecione um local..." value={null} />
          {locations.map(loc => (
            <Picker.Item
              key={loc.id}
              label={loc.name}
              value={loc.id}
            />
          ))}
        </Picker>
      </View>

      {error && (
        <Text style={styles.errorText}>
          {label} não selecionado
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 15
  },
  box: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#FFF"
  },
  boxError: {
    borderColor: colors.danger
  },
  errorText: {
    color: colors.danger,
    marginTop: 4,
    fontSize: 13
  }
});
