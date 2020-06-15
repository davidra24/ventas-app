import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import {
  CORPORATIVE_COLOR,
  DISABLED_COLOR,
  DEFAULT_TYPE,
} from "../../utils/constants";
import { EmailIcon } from "../../utils/icons";
import {
  registerFormWrapper,
  defaultRegisterForm,
} from "../../data/registerForm";
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash";
import * as firebase from "firebase";
import { Loading } from "../loading";
import { useNavigation } from "@react-navigation/native";

export const RegisterForm = ({ toast }: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<registerFormWrapper>(
    defaultRegisterForm
  );
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation();

  const handleChange = (e: any, type: string) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const handleSubmit = async () => {
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      toast.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toast.current.show("El formato del e-mail no es correcto");
    } else if (formData.password !== formData.repeatPassword) {
      toast.current.show("Las contraseñas tienen que ser iguales");
    } else if (size(formData.password) < 6) {
      toast.current.show("La contraseña tiene que ser mínimo de 6 caracteres");
    } else {
      setLoading(true);
      await firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(false);
          navigation.navigate("account");
        })
        .catch(() => {
          setLoading(false);
          toast.current.show("El e-mail ya está en uso, pruebe con otro,");
        });
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.inputForm}
        rightIcon={<EmailIcon />}
        onChange={(e) => handleChange(e, "email")}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        secureTextEntry={!showPassword}
        rightIcon={
          <Icon
            type={DEFAULT_TYPE}
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color={DISABLED_COLOR}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChange={(e) => handleChange(e, "password")}
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.inputForm}
        secureTextEntry={!showRepeatPassword}
        rightIcon={
          <Icon
            type={DEFAULT_TYPE}
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            color={DISABLED_COLOR}
            onPress={() => setShowRepeatPassword(!showRepeatPassword)}
          />
        }
        onChange={(e) => handleChange(e, "repeatPassword")}
      />
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={handleSubmit}
      />
      <Loading isVisible={loading} text="Registrando cuenta" />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputForm: {
    width: "100%",
  },
  btnContainerRegister: {
    marginTop: 15,
    width: "80%",
  },
  btnRegister: {
    backgroundColor: CORPORATIVE_COLOR,
  },
});
