import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import {
  CORPORATIVE_COLOR,
  DEFAULT_TYPE,
  DISABLED_COLOR,
} from "../../utils/constants";
import { EmailIcon } from "../../utils/icons";
import { defaultLoginForm, loginFormWrapper } from "../../data/loginForm";
import { isEmpty } from "lodash";
import { validateEmail } from "../../utils/validations";
import * as firebase from "firebase";
import { Loading } from "../../components/loading";
import { useNavigation } from "@react-navigation/native";

export const LoginForm = ({ toast }: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<loginFormWrapper>(defaultLoginForm);
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation();

  const handleChange = (e: any, type: string) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const handleSubmit = async () => {
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      toast.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toast.current.show("El formato del e-mail no es correcto");
    } else {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(false);
          navigation.navigate("account");
        })
        .catch(() => {
          setLoading(false);
          toast.current.show("Email o contraseña incorrecta");
        });
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.inputForm}
        onChange={(e) => handleChange(e, "email")}
        rightIcon={<EmailIcon />}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        secureTextEntry={!showPassword}
        onChange={(e) => handleChange(e, "password")}
        rightIcon={
          <Icon
            type={DEFAULT_TYPE}
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color={DISABLED_COLOR}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnConainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={handleSubmit}
      />
      <Loading isVisible={loading} text="Iniciando Sesión" />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnConainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: CORPORATIVE_COLOR,
  },
});
