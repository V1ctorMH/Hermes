import { View, Pressable, Text, StyleSheet } from "react-native";

export default function AccessibilityMode({ mode, setMode }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          mode === "wheelchair" && styles.active
        ]}
        onPress={() => setMode("wheelchair")}
      >
        <Text style={styles.text}>Pessoas com Baixa Mobilidade</Text>
      </Pressable>

      <Pressable
        style={[
          styles.button,
          mode === "visual" && styles.active
        ]}
        onPress={() => setMode("visual")}
      >
        <Text style={styles.text}>Pessoas com Deficiência Visual</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    marginHorizontal: 4,
    borderRadius: 12,
    backgroundColor: "#E5E7EB",
    alignItems: "center"
  },
  active: {
    backgroundColor: "#2563EB"
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827"
  }
});
