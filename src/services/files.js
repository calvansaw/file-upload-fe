import axios from "axios";
import { UPLOAD_URL } from "../constants";

export const files = (data) => {
  return axios.get(`${UPLOAD_URL}/files`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};
