import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../../screens/favorites";

const Stack = createStackNavigator();

const { Navigator, Screen } = Stack;

export const FavoriteStack = () => (
  <Navigator>
    <Screen
      name="favorites"
      component={Favorites}
      options={{ title: "Tus favoritos" }}
    />
  </Navigator>
);
