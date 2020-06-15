import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../screens/search";

const Stack = createStackNavigator();

const { Navigator, Screen } = Stack;

export const SearchStack = () => (
  <Navigator>
    <Screen
      name="search"
      component={Search}
      options={{ title: "Buscar restaurantes" }}
    />
  </Navigator>
);
