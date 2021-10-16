import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { Colors } from "../../Theme";

type Props = {
  uri: string;
  index: number;
  activeIndex: number;
  onPress: () => void;
};
const ThumbCard = ({ uri, activeIndex, index, onPress }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <FastImage
        source={{ uri, priority: FastImage.priority.high }}
        style={[styles.thumb, activeIndex === index && styles.active]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 10,
  },
  active: {
    borderWidth: 3,
    borderColor: Colors.success,
  },
});

export default ThumbCard;
