import { API_URL } from "../../setting/api";
import axios from "../../setting/axios";
const API = API_URL + "/posts";

export function apiGetAllPosts() {
    console.log(API)
  return axios.get(API);
}
