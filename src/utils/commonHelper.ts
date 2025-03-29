import { Dimensions, Platform, StyleProp, TextStyle } from "react-native";

export const { width, height } = Dimensions.get("window");

export const isIos = Platform.OS === "ios" ? true : false;

export const tabBarLabelStyle: StyleProp<TextStyle> = {
  //   color: "black",
  fontSize: height / 80,
  textTransform: "capitalize",
};
