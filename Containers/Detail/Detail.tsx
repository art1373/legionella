import * as React from "react";
import { useRoute } from "@react-navigation/core";
import { ImageBackground, StyleSheet } from "react-native";

type RouteParams = {
  uri: string;
};
const Detail = () => {
  const { uri } = useRoute().params as RouteParams;
  return (
    <ImageBackground source={{ uri }} style={StyleSheet.absoluteFillObject} />
  );
};

export default Detail;
