import * as React from "react";
import * as Redux from "react-redux";
import { FlatList, SafeAreaView, ActivityIndicator } from "react-native";
import { fetchPictureWithPagination } from "../../Stores/Pictures/actions";
import { getPictures } from "../../Stores/Pictures/selectors";
import { Picture } from "../../Stores/pictures/constants";
import { useOrientation } from "../../utils/hooks/useOrientation";
import { Colors, Helpers } from "../../Theme";
import { PhotoCard } from "../../Components";

const Home = () => {
  const dispatch = Redux.useDispatch();
  const pictures = Redux.useSelector(getPictures);
  const [offset, setoffset] = React.useState(1);
  const orientation = useOrientation();
  const isLandScape = Boolean(orientation === "LANDSCAPE");

  const renderItem = React.useCallback(
    ({ item }: { item: Picture }) => <PhotoCard item={item} />,
    []
  );

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

export default Home;
