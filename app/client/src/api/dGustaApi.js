import axios from 'axios';

export const dGustaApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`
    // headers: {
    //   Accept: "application/json",
    //   "X-Requested-With": "XMLHttpRequest",
    // },
    // withCredentials: true,
});
