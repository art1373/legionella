import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-animatable";
import FastImage from "react-native-fast-image";
import { Colors, Helpers } from "../../Theme";

type Props = {
  uri: string;
  name: string;
  portfolio: string;
  goToPortfolio: (portfolio: string) => void;
};
const FullCard = ({ uri, name, goToPortfolio, portfolio }: Props) => {
  return (
    <View animation="fadeIn" duration={600} style={[Helpers.fill]}>
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

export default FullCard;
