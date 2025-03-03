import axios from 'axios';

export default function fetchImages(searchText) {
  const options = {
    params: {
      key: '48678129-2163769dcaa82a491114adb07',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  return axios.get('https://pixabay.com/api/', options);
}

