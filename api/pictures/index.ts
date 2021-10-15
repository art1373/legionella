import axios from '../../Services/axiosConfig';

export const fetchImages = async (offset: number | string) => {
  return await axios.get(`?page=${offset}&per_page=10`);
};

export default {
  fetchImages,
};
