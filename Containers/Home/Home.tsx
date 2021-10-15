import * as React from 'react';
import * as Redux from 'react-redux';
import {Text, FlatList} from 'react-native';
import {fetchPictureWithPagination} from '../../Stores/Pictures/actions';
import {getPictures} from '../../Stores/Pictures/selectors';
import {Picture} from '../../Stores/pictures/constants';

const Home = () => {
  const dispatch = Redux.useDispatch();
  const pictures = Redux.useSelector(getPictures);
  const [offset, setoffset] = React.useState(1);
  const renderItem = React.useCallback(({item}: {item: Picture}) => {
    return <Text key={item.created_at + item.id}>{item.id}</Text>;
  }, []);

  const fetchNext = React.useCallback(() => {
    setoffset(prev => prev + 1);
  }, []);

  React.useEffect(() => {
    // dispatch(fetchPictureWithPagination(offset));
  }, [dispatch, offset]);

  return (
    <FlatList
      data={pictures}
      renderItem={renderItem}
      onEndReached={fetchNext}
    />
  );
};

export default Home;
