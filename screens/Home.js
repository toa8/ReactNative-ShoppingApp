import { StyleSheet, View } from "react-native";
import React from "react";

// COMPONENTS
import FetchProdutcs from "../components/FetchProducts";
import Header from "../components/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FetchProdutcs />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
  },
});
