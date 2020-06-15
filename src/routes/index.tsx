//React
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Pages
import { RestaurantsStack } from "./Restaurant";
import { FavoriteStack } from "./Favorites";
import { TopRestaurantsStack } from "./TopRestaurants";
import { SearchStack } from "./Search";
import { AccountStack } from "./Account";

//Elements
import { Icon } from "react-native-elements";
import { CORPORATIVE_COLOR } from "../utils/constants";
import { MenuIcons } from "../utils/icons";

const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;

const screenOptions = (route: any, color: any) => {
  const { name } = route;
  return <MenuIcons name={name} />;
};

const Navigation = () => (
  <NavigationContainer>
    <Navigator
      initialRouteName="restaurants"
      tabBarOptions={{
        inactiveTintColor: "#646464",
        activeTintColor: CORPORATIVE_COLOR,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Screen
        name="restaurants"
        component={RestaurantsStack}
        options={{
          title: "Restaurantes",
        }}
      />
      <Screen
        name="favorites"
        component={FavoriteStack}
        options={{
          title: "Favoritos",
        }}
      />
      <Screen
        name="top-restaurants"
        component={TopRestaurantsStack}
        options={{
          title: "Top",
        }}
      />
      <Screen
        name="search"
        component={SearchStack}
        options={{
          title: "Busqueda",
        }}
      />
      <Screen
        name="account"
        component={AccountStack}
        options={{
          title: "Cuenta",
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Navigation;
