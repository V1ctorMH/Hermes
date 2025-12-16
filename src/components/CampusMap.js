import { View, Text, Image, StyleSheet, Dimensions } from "react-native";


const { width } = Dimensions.get("window");


export default function CampusMap({ show }) {
if (!show) return null;


return (
<View>
<Text style={styles.title}>Mapa do Campus</Text>
<Image
source={require("../../assets/campus-map.png")}
style={styles.map}
resizeMode="contain"
/>
</View>
);
}


const styles = StyleSheet.create({
title: { fontWeight: "bold", marginBottom: 8 },
map: {
width: width * 1.2,
height: 420,
borderRadius: 16
}
});