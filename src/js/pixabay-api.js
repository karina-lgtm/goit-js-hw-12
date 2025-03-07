import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';

export async function searchImg(query, page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = {
        key: '48901588-d5168312fb6e442ccb66c926a',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page:40 
    };
    return await axios.get(BASE_URL, { params })
};  
