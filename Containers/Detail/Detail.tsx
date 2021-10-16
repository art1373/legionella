import * as React from "react";
import * as Redux from "react-redux";
import { Linking, Pressable, StyleSheet, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { FullPhotoCard } from "../../Components";
import { getPicturesWithSelectedId } from "../../Stores/Pictures/selectors";
import { FlatList } from "react-native-gesture-handler";
import { Picture } from "../../Stores/Pictures/constants";
import { View } from "react-native-animatable";
import { Colors, Helpers } from "../../Theme";
import ThumbCard from "../../Components/ThumbCard/ThumbCard";
import { screen } from "../../utils/metrics";

type RouteParams = {
  id: string;
};

const Detail = () => {
  const { goBack } = useNavigation();
  const topListRef = React.useRef<any>();
  const thumbRef = React.useRef<any>();
  const { id } = useRoute().params as RouteParams;
  const modifiedPictures = Redux.useSelector(getPicturesWithSelectedId(id));
  const [activeIndex, setactiveIndex] = React.useState(0);
  const goToPortfolio = React.useCallback(async (link) => {
    const canOpen = await Linking.canOpenURL(link);
    if (canOpen) return Linking.openURL(link);
  }, []);

  const renderItem = React.useCallback(
    ({ item }: { item: Picture }) => (
      <FullPhotoCard
        name={item.user.name}
        uri={item.urls.regular}
        portfolio={item.user.social.portfolio_url}
        goToPortfolio={goToPortfolio}
      />
    ),
    []
  );
  const renderThumb = React.useCallback(
    ({ item, index }: { item: Picture; index: number }) => (
      <ThumbCard
        uri={item.urls.thumb}
        activeIndex={activeIndex}
        index={index}
        onPress={() => scrollToActiveIndex(index)}
      />
    ),
    [activeIndex]
  );

  const scrollToActiveIndex = (currentIndex: number) => {
    // calc the middle of screen and scroll accordingly
    setactiveIndex(currentIndex);
    topListRef?.current?.scrollToOffset({
      offset: currentIndex * screen.width,
      animated: true,
    });

    if (currentIndex * (80 - 10) - 80 / 2 > screen.width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: currentIndex * (80 + 10) - screen.width / 2 + 80 / 2,
        animated: true,
      });
    }
  };

  return (
    <View style={[Helpers.fill]}>
      <FlatList
        ref={topListRef}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        data={modifiedPictures}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={(ev) =>
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / screen.width)
          )
        }
      />
      <FlatList
        ref={thumbRef}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        data={modifiedPictures}
        renderItem={renderThumb}
        horizontal
        style={styles.thumbListStyle}
        contentContainerStyle={styles.thumbListContent}
      />
      <Pressable style={styles.backBtnView} onPress={() => goBack()}>
        <Text style={styles.icon}>X</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbListStyle: {
    position: "absolute",
    bottom: 20,
  },
  thumbListContent: {
    paddingHorizontal: 10,
  },
  backBtnView: {
    backgroundColor: "white",
    position: "absolute",
    top: 50,
    left: 20,
    width: 30,
    height: 30,
    ...Helpers.center,
    borderRadius: 15,
  },
  icon: {
    fontWeight: "bold",
    color: Colors.error,
    textAlign: "center",
    fontSize: 25,
  },
});

export default Detail;
