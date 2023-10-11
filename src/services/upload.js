import axios from "axios";
import { UPLOAD_URL } from "../constants";

export const upload = (data) => {
  return axios.put(`${UPLOAD_URL}/upload`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};
