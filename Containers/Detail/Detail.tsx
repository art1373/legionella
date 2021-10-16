import * as React from "react";
import { useRoute } from "@react-navigation/core";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-animatable";
import FastImage from "react-native-fast-image";
import { Colors, Helpers } from "../../Theme";

type RouteParams = {
  uri: string;
  description?: string;
  portfolio: string;
  name: string;
};

const Detail = () => {
  const { uri, description, portfolio, name } = useRoute()
    .params as RouteParams;

  const goToPortfolio = React.useCallback(async (link) => {
    const canOpen = await Linking.canOpenURL(link);
    if (canOpen) return Linking.openURL(link);
  }, []);

  return (
    <View animation="slideInLeft" duration={600} style={[Helpers.fill]}>
      <FastImage
        source={{ uri, priority: FastImage.priority.high }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.descriptionView}>
        <Text style={styles.moreInfo}>Photo by: {name}</Text>
        <TouchableOpacity onPress={() => goToPortfolio(portfolio)}>
          <Text style={styles.visitPorfile}>Visit portfolio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionView: {
    position: "absolute",
    bottom: 40,
    left: 20,
    paddingVertical: 20,
  },
  moreInfo: {
    fontWeight: "bold",
    color: Colors.white,
  },
  visitPorfile: {
    fontWeight: "bold",
    color: Colors.white,
    marginTop: 5,
  },
});

export default Detail;
