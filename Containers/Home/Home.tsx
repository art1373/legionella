import * as React from "react";
import * as Redux from "react-redux";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { fetchPictureWithPagination } from "../../Stores/Pictures/actions";
import { getPictures } from "../../Stores/Pictures/selectors";
import { Picture } from "../../Stores/pictures/constants";
import { useNavigation } from "@react-navigation/core";
import { HomeRoutes } from "../../utils/constants";

const Home = () => {
  const navigation = useNavigation();
  const dispatch = Redux.useDispatch();
  const pictures = Redux.useSelector(getPictures);
  const [offset, setoffset] = React.useState(1);
  const renderItem = React.useCallback(({ item }: { item: Picture }) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate(HomeRoutes.DETAIL, { uri: item.urls.regular })
        }
      >
        <Image source={{ uri: item.urls.thumb }} style={styles.imageItem} />
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
      <FlatList
        data={pictures}
        keyExtractor={(picture) => picture.id}
        renderItem={renderItem}
        onEndReached={fetchNext}
        numColumns={4}
      />
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
