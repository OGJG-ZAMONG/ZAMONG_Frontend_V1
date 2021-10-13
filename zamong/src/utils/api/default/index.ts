import axios, { AxiosError } from "axios";

const instance = axios.create({
    baseURL: "test",
    timeout: 500000,
    maxContentLength: 1000000000,
    maxBodyLength : 1000000000,
})
instance.interceptors.request.use(
    function (config) {
        return config;
    }, 
    function (error : AxiosError) {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error : AxiosError) {
        return Promise.reject(error);
    }
);
export default instance;