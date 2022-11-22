import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

// GLOBAL STATES
import useBasketStore from "../globalStates/basketStore";

// NAVIGATION
import { useNavigation } from "@react-navigation/native";

// ICONS
import { EvilIcons } from "@expo/vector-icons";

const Basket = () => {
  const basket = useBasketStore((state) => state.basket);
  const clearBasket = useBasketStore((state) => state.clearBasket);
  const amount = useBasketStore((state) => state.amount);
  const deleteItem = useBasketStore((state) => state.deleteItem);
  const minusAmount = useBasketStore((state) => state.minusAmount);

  const navigation = useNavigation();

  return (
    <>
      {basket.length === 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 26,
              width: "80%",
              fontWeight: "bold",
              lineHeight: 36,
            }}
          >
            There's nothing to show! Go and buy something...
          </Text>
        </View>
      ) : (
        <>
          <ScrollView style={styles.container}>
            <View style={styles.header}>
              <Text
                style={{
                  fontSize: 18,
                  borderRadius: 100 / 2,
                  color: "#fff",
                  backgroundColor: "#000",
                  width: 30,
                  height: 30,
                  fontWeight: "bold",
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              >
                {basket.length}
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ fontSize: 18 }}>Go back</Text>
              </TouchableOpacity>
            </View>
            {basket.map((item, idx) => {
              return (
                <View key={idx} style={styles.productCard}>
                  <Text style={{ textAlignVertical: "center", marginRight: 8 }}>
                    {idx + 1}.
                  </Text>
                  <Image source={{ uri: item.image }} style={styles.img} />
                  <View
                    style={{
                      flex: 1,
                      borderBottomWidth: 1,
                      borderBottomColor: "#eee",
                      paddingHorizontal: 12,
                    }}
                  >
                    <Text style={styles.titleText}>{item.title}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        paddingTop: 18,
                        justifyContent: "space-between",
                        paddingBottom: 5,
                      }}
                    >
                      <Text style={styles.priceText}>${item.price}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          deleteItem(basket, idx);
                          minusAmount(item.price);
                        }}
                        style={styles.trashContainer}
                      >
                        <EvilIcons name="trash" size={30} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <View
            style={{
              backgroundColor: "#a64c46",
              alignItems: "center",
              height: 100,
            }}
          >
            <Text style={styles.amountText}>Total amount : ${amount}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => clearBasket()}
              >
                <Text
                  style={{
                    color: "#505459",
                    fontWeight: "bold",
                  }}
                >
                  clear all
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text
                  onPress={() => alert("Sucsessfully Purchased")}
                  style={{
                    color: "#505459",
                    fontWeight: "bold",
                  }}
                >
                  purchase
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 34,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#b5b3b1",
  },
  productCard: {
    flexDirection: "row",
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  amountText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    borderRadius: 40,
    width: 100,
    height: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "#dce1e8",
  },
  trashContainer: {
    backgroundColor: "#000",
    borderRadius: 100 / 2,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
