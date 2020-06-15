import React from "react";
import { Icon } from "react-native-elements";
import {
  CORPORATIVE_COLOR,
  DISABLED_COLOR,
  DEFAULT_TYPE,
  DEFAULT_SIZE,
  DEFAULT_ICON,
} from "./constants";

interface iconProps {
  type?: string;
  size?: number;
  color?: string;
}

export const MenuIcons = ({
  name,
  size = DEFAULT_SIZE,
  color = CORPORATIVE_COLOR,
}: any) => {
  let iconName = DEFAULT_ICON;
  switch (name) {
    case "restaurants":
      iconName = "compass-outline";
      break;
    case "favorites":
      iconName = "heart-outline";
      break;
    case "top-restaurants":
      iconName = "star-outline";
      break;
    case "search":
      iconName = "magnify";
      break;
    case "account":
      iconName = "home-outline";
      break;
    default:
      iconName = "compass-outline";
      break;
  }
  return <Icon type={DEFAULT_TYPE} name={iconName} color={color} size={size} />;
};

export const EmailIcon = ({
  type = DEFAULT_TYPE,
  size = DEFAULT_SIZE,
  color = DISABLED_COLOR,
}: iconProps) => (
  <Icon type={type} name="at" color={DISABLED_COLOR} size={size} />
);
