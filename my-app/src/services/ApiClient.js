import axios from "axios";
import config from "./config";

const APIClient = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-api-key":
      "live_oNGEL9BVUoBxyWruShcCUQ3yF3yOfO5o3E3vJjTmTUfaIGkbxmCvLyjHuoET2ODu",
  },
});

export default APIClient;
