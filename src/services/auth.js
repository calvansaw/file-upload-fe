import axios from "axios";
import { CLIENT_ID, REDIRECT_URI, TOKEN_URL } from "../constants";

export const token = () => {
  return axios.post(
    TOKEN_URL,
    {
      grant_type: "authorization_code",
      code: localStorage.getItem("authCode"),
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};
