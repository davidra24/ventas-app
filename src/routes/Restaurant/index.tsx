import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from "../../screens/restaurants";

const Stack = createStackNavigator();

const { Navigator, Screen } = Stack;

export const RestaurantsStack = () => (
  <Navigator>
    <Screen
      name="restaurants"
      component={Restaurants}
      options={{ title: "Restaurantes" }}
    />
  </Navigator>
);
