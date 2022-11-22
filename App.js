import React from "react";

// ICONS
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
// NAVIGATIONS
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// SCREENS
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Basket from "./screens/Basket";
import useBasketStore from "./globalStates/basketStore";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

const App = () => {
  const basket = useBasketStore((state) => state.basket);
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          options={{
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ focused }) => {
              return (
                <AntDesign
                  name="home"
                  size={24}
                  style={{ color: focused ? "black" : "#b5b4b0" }}
                />
              );
            },
          }}
          name="Home"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="shopping-basket"
                  size={24}
                  style={{ color: focused ? "black" : "#b5b4b0" }}
                />
              );
            },
          }}
          name={`Basket ${basket.length === 0 ? "" : `(${basket.length})`}`}
          component={Basket}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
