import * as React from "react";
import { useRoute } from "@react-navigation/core";
import { StyleSheet } from "react-native";
import { View } from "react-native-animatable";
import FastImage from "react-native-fast-image";
import { Helpers } from "../../Theme";

type RouteParams = {
  uri: string;
};

const Detail = () => {
  const { uri } = useRoute().params as RouteParams;

  return (
    <View animation="slideInLeft" duration={600} style={[Helpers.fill]}>
      <FastImage
        source={{ uri, priority: FastImage.priority.high }}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
};

export default Detail;
