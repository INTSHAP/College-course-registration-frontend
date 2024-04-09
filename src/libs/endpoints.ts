const NODE_ENV = import.meta.env.NODE_ENV;

const base_api_url_dev = "http://localhost:3000/api/v1";
const base_api_url_pro =
  "https://college-course-reg-system.onrender.com/api/v1";
const base_api_url =
  NODE_ENV === "production" ? base_api_url_pro : base_api_url_dev;
export const LOGIN_URL = base_api_url + "/login";
export const SIGNUP_URL = base_api_url + "/signup";
