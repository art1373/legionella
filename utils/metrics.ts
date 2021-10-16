import { Dimensions, Platform } from "react-native";

export const screen = Dimensions.get("window");

export const metrics = {
  smallIos: Platform.OS === "ios" && screen.height <= 800,
  smallAndroid: Platform.OS === "android" && screen.height <= 800,
};
