import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";
import { CORPORATIVE_COLOR } from "../../utils/constants";

interface loadingProps {
  isVisible: boolean;
  text?: string;
}

export const Loading = ({ isVisible, text }: loadingProps) => (
  <Overlay
    isVisible={isVisible}
    backdropStyle={{ backgroundColor: "rgba(0,0,0,.5)" }}
    overlayStyle={{ ...styles.overlayPrimary }}
  >
    <View style={styles.view}>
      <ActivityIndicator size="large" color={CORPORATIVE_COLOR} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  </Overlay>
);

const styles = StyleSheet.create({
  overlayPrimary: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: CORPORATIVE_COLOR,
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: CORPORATIVE_COLOR,
    textTransform: "uppercase",
    marginTop: 15,
  },
});
