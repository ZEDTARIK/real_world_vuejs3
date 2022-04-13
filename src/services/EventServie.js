import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/ZEDTARIK/Fake-data",
    withCredentials: false,
    headers: {
        Accept: "Application/json",
        "Content-Type": "application/json",
    },
});
export default {
    getEvents() {
        return apiClient.get("/events");
    },
};