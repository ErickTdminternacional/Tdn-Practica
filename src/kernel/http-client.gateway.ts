import { Axios, AxiosRequestConfig } from 'axios';
import AxiosClient from "../config/axios";

export default {
    doGet(direction: string) {
        return AxiosClient.get(direction);
    },
    doDelete(direction: string) {
        return AxiosClient.delete(direction)
    },
    doPost(direction: string, object: object, config?: AxiosRequestConfig) {
        return AxiosClient.post(direction, object, config);
    },
    doPut(direction: string, object: object) {
        return AxiosClient.put(direction, object);
    }
}