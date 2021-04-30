import axios from 'axios';

export const requestSearch = (query) => {
    return axios.request({
        method: 'get',
        url: `http://localhost:5000/artists?q=${query}`,
    });
};
