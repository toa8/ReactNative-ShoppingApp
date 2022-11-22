import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

// NAVIGATION
import { useNavigation } from "@react-navigation/native";

// GLOBAL STATE
import useDetailStore from "../globalStates/detailStore";
import useBasketStore from "../globalStates/basketStore";

const ProductCard = ({ product }) => {
  const getDetail = useDetailStore((state) => state.getDetail);

  const addItem = useBasketStore((state) => state.addItem);
  const getAmount = useBasketStore((state) => state.getAmount);

  const navigation = useNavigation();
  const { title, image, price, description, category, id } = product;

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: image }} />
      <View style={styles.textArea}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.innerArea}>
          <Text style={{ fontSize: 16 }}>${price}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                ...styles.btn,
                marginRight: 4,
                backgroundColor: "#78bfc2",
              }}
              onPress={() => {
                navigation.navigate("Detail");
                getDetail({ description, image, title, category });
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Detail</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ ...styles.btn, backgroundColor: "#eb1737", width: 90 }}
              onPress={() => {
                addItem({
                  title: title,
                  price: price,
                  image: image,
                  id: id,
                }),
                  getAmount(price);
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Add to Basket
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#b5bdbc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
    marginVertical: 8,
    marginHorizontal: 8,
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontSize: 13,
  },
  textArea: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  innerArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    width: 50,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
});
