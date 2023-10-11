export const DOMAIN_URL =
  "https://authcs.auth.ap-southeast-1.amazoncognito.com";
export const CLIENT_ID = "5tkqkshj5v16aeh665p03ji77a";
export const REDIRECT_URI = "http://localhost:3000";

export const AUTHORIZE_URL = `${DOMAIN_URL}/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&scope=resourceidentifier/read%20resourceidentifier/write&redirect_uri=${REDIRECT_URI}`;
export const TOKEN_URL = `${DOMAIN_URL}/oauth2/token`;

export const UPLOAD_URL =
  "https://i66a1oe8m8.execute-api.ap-southeast-1.amazonaws.com/dev";
