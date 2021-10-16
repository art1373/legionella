import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import FastImage from "react-native-fast-image";
import { Picture } from "../../Stores/Pictures/constants";
import { HomeRoutes } from "../../utils/constants";

type Props = {
  item: Picture;
};
const Card = ({ item }: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(HomeRoutes.DETAIL, {
          uri: item.urls.regular,
          description: item.alt_description,
          portfolio: item.user.social.portfolio_url,
          name: item.user.name,
        })
      }
    >
      <FastImage
        source={{ uri: item.urls.regular, priority: FastImage.priority.high }}
        style={styles.imageItem}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageItem: {
    width: 200,
    height: 200,
    aspectRatio: 1,
    borderWidth: 3,
    borderColor: "white",
  },
});
export default Card;
