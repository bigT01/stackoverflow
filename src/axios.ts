"use client"
import axios, {AxiosRequestConfig} from "axios";


// @ts-ignore
const instance = axios.create({baseURL: "https://devhouse-5sts.onrender.com/"})

instance.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default instance
