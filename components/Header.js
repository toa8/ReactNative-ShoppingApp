import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/headerPic.jpg")}
        />
        <Text style={styles.title}>Martha's Shop</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
  },
  image: {
    width: "100%",
    height: 80,
    resizeMode: "cover",
  },
  title: {
    position: "absolute",
    top: 16,
    left: 60,
    color: "#fff",
    fontSize: 38,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
