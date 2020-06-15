import React from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { CORPORATIVE_COLOR } from "../../utils/constants";

export const UserGuest = () => {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <View>
        <Image
          source={require("../../../assets/img/no-login.jpg")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}> Consulta tu perfil en la App </Text>
        <Text style={styles.description}>
          ¿Cómo describirias tu mejor restaurante? Busca y visualiza los mejores
          restaurantes de forma sencilla. Vota, cuál te ha gustado más. Y
          comenta cómo ha sido tu experiencia
        </Text>
      </View>
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainerStyle}
          title="Ver tu perfil"
          onPress={() => {
            navigation.navigate("login");
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: CORPORATIVE_COLOR,
  },
  btnContainerStyle: {
    width: "70%",
  },
});
