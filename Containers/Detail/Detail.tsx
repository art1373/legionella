import * as React from "react";
import { useRoute } from "@react-navigation/core";
import { Linking, StyleSheet } from "react-native";
import { Colors } from "../../Theme";
import { FullPhotoCard } from "../../Components";

type RouteParams = {
  uri: string;
  description?: string;
  portfolio: string;
  name: string;
};

const Detail = () => {
  const { uri, portfolio, name } = useRoute().params as RouteParams;

  const goToPortfolio = React.useCallback(async (link) => {
    const canOpen = await Linking.canOpenURL(link);
    if (canOpen) return Linking.openURL(link);
  }, []);

  return (
    <FullPhotoCard
      name={name}
      uri={uri}
      portfolio={portfolio}
      goToPortfolio={goToPortfolio}
    />
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
