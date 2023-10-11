import axios from "axios";
import { UPLOAD_URL } from "../constants";

export const publicFiles = (data) => {
  return axios.get(`${UPLOAD_URL}/public`, data);
};
