import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../../screens/account";
import Login from "../../screens/account/Login";
import { Register } from "../../screens/account/Register";

const Stack = createStackNavigator();

const { Navigator, Screen } = Stack;

export const AccountStack = () => (
  <Navigator>
    <Screen
      name="account"
      component={Account}
      options={{ title: "Tu cuenta" }}
    />
    <Screen
      name="login"
      component={Login}
      options={{ title: "Iniciar sesión" }}
    />
    <Screen
      name="register"
      component={Register}
      options={{ title: "Registro" }}
    />
  </Navigator>
);
