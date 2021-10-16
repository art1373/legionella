import * as React from "react";
import * as Redux from "react-redux";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import FastImage from "react-native-fast-image";
import { fetchPictureWithPagination } from "../../Stores/Pictures/actions";
import { getPictures } from "../../Stores/Pictures/selectors";
import { Picture } from "../../Stores/pictures/constants";
import { useNavigation } from "@react-navigation/core";
import { HomeRoutes } from "../../utils/constants";
import { useOrientation } from "../../utils/hooks/useOrientation";
import { Colors, Helpers } from "../../Theme";

const Home = () => {
  const navigation = useNavigation();
  const dispatch = Redux.useDispatch();
  const pictures = Redux.useSelector(getPictures);
  const [offset, setoffset] = React.useState(1);
  const orientation = useOrientation();
  const isLandScape = Boolean(orientation === "LANDSCAPE");

  const renderItem = React.useCallback(({ item }: { item: Picture }) => {
    console.log({ item });

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
  }, []);

  const fetchNext = React.useCallback(() => {
    setoffset((prev) => prev + 1);
  }, []);

  React.useEffect(() => {
    dispatch(fetchPictureWithPagination(offset));
  }, [dispatch, offset]);

  return (
    <SafeAreaView>
      {!pictures.length ? (
        <ActivityIndicator
          size={40}
          color={Colors.primary}
          style={[Helpers.fullMarginTop]}
        />
      ) : (
        <FlatList
          data={pictures}
          key={isLandScape ? 0 : 2}
          horizontal={isLandScape}
          keyExtractor={(picture) => picture.id}
          renderItem={renderItem}
          onEndReached={fetchNext}
          numColumns={isLandScape ? 0 : 2}
        />
      )}
    </SafeAreaView>
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

export default Home;
