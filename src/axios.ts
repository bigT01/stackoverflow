"use client"
import axios, {AxiosRequestConfig} from "axios";


// @ts-ignore
const instance = axios.create({baseURL: "https://flawless-empire-387918.lm.r.appspot.com/"})

instance.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default instance
