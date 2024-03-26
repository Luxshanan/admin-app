import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://support-service-933010320:8080//api",
    headers: {}
});