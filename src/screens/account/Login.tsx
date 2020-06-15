import React, { useRef } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { CreateAccount } from "../../containers/account/CreateAccount";
import { Divider } from "react-native-elements";
import { CORPORATIVE_COLOR } from "../../utils/constants";
import { LoginForm } from "../../components/account/LoginForm";
import Toast from "react-native-easy-toast";

const Login = () => {
  const toastRef = useRef();
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <LoginForm toast={toastRef} />
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Text>Social Login</Text>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  divider: {
    backgroundColor: CORPORATIVE_COLOR,
    margin: 40,
  },
});

export default Login;
