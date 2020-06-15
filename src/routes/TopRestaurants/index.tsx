import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestaurants from "../../screens/top-restaurants";

const Stack = createStackNavigator();

const { Navigator, Screen } = Stack;

export const TopRestaurantsStack = () => (
  <Navigator>
    <Screen
      name="top-restaurants"
      component={TopRestaurants}
      options={{ title: "Mejores restaurantes" }}
    />
  </Navigator>
);
