import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const myApiKey = '50780112-993b28f3a55d0d18f65c2792c';

export function getImagesByQuery(query) {
  const params = {
    key: myApiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 18,
  };

  return axios.get(baseUrl, { params }).then(responce => responce.data);
}
