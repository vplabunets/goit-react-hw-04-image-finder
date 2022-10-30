import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/';

export async function apiPixabay(query, currentPage) {
  const response = await axios.get('api/', {
    params: {
      q: query,
      key: '29714079-b64164321d422be07299c5198',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: currentPage,
    },
  });
  return response;
}
