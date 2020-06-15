import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { CORPORATIVE_COLOR } from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";

export const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.textRegister}>¿Aún no tienes una cuenta?</Text>
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("register")}
      >
        Registrate
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
  },
  btnRegister: {
    color: CORPORATIVE_COLOR,
    fontWeight: "bold",
    textAlign: "center",
  },
});
