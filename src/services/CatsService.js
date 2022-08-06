import axios from 'axios';

export default {
  getCatsList: async function () {
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getCatImage: async function (catId) {
    const BASE_URL = 'https://api.thecatapi.com/v1/images/search?breed_id=' + catId;

    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
