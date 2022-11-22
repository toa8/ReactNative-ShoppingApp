import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

// NAVIGATIONS
import { useNavigation } from "@react-navigation/native";

// GLOBAL STATES
import useDetailStore from "../globalStates/detailStore";

const Detail = () => {
  const navigation = useNavigation();
  const detail = useDetailStore((state) => state.detail);

  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 40,
          marginBottom: 30,
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Detail</Text>
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ fontSize: 16 }}>Go back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image source={{ uri: detail.image }} style={styles.image} />
        <Text style={styles.title}>{detail.title}</Text>
        <View style={styles.descContainer}>
          <Text style={{ fontSize: 16 }}>{detail.description}</Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 30 }}>
          Category : {detail.category}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative",
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  descContainer: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  goBackBtn: {},
});
