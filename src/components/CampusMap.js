import { View, Image, StyleSheet, Dimensions, Text } from "react-native";

const { width } = Dimensions.get("window");

export default function CampusMap({ route, stepIndex, from, to }) {

  const hasError =
    !from ||
    !to ||
    from === to ||
    !route;

  const getMessage = () => {
    if (!from || !to) return "Selecione a origem e o destino";
    if (from === to) return "Origem e destino não podem ser iguais";
    if (!route) return "Nenhuma rota acessível encontrada";
    return null;
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/campus-map.png")}
        style={styles.map}
        resizeMode="contain"
      />

      {hasError && (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>
            {getMessage()}
          </Text>
        </View>
      )}

      {!hasError &&
        route.path?.map((point, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { left: point.x, top: point.y },
              index === stepIndex && styles.activeDot
            ]}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#FFFFFF"
  },
  map: {
    width: width * 1.15,
    height: 420,
    borderRadius: 18,
    backgroundColor: "#FFFFFF" 
  },
  dot: {
    position: "absolute",
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#2563EB"
  },
  activeDot: {
    backgroundColor: "#DC2626",
    width: 18,
    height: 18,
    borderRadius: 9
  }
});
