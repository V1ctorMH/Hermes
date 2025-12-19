import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function CampusMap({ route, stepIndex }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/campus-map.png")}
        style={styles.map}
        resizeMode="contain"
      />

      {route?.path?.map((point, index) => (
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
    marginBottom: 12
  },
  map: {
    width: width * 1.15,
    height: 420,
    borderRadius: 18
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
