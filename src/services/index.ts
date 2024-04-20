import axios from "axios";
const NODE_ENV = import.meta.env.NODE_ENV;

const base_api_url_dev = "http://localhost:3000/v1";
const base_api_url_pro = "https://college-course-reg-system.onrender.com/v1";

// export const LOGIN_URL = base_api_url + "/login";
// export const SIGNUP_URL = base_api_url + "/signup";

export const API_BASE_URL = base_api_url_pro;
NODE_ENV === "production" ? base_api_url_pro : base_api_url_dev;

export const axiosInstance = axios.create({ baseURL: base_api_url_pro });
