import axios from 'axios';

export const getPosts=(page)=>{
    return axios.get(`${process.env.REACT_APP_BASE_URL}search_by_date?tags=story&page=${page}`);
}
