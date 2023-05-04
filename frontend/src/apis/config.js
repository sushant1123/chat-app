// import dotenv from "dotenv";
// dotenv.config();

export const getURL = () => {
  let api_hostname = "";
  if (window.location.hostname === "localhost") {
    api_hostname = import.meta.env.VITE_BACKEND_LOCAL;
  } else if (window.location.hostname === "cloudsbay-client-sush.netlify.app") {
    api_hostname = import.meta.env.VITE_BACKEND_PROD;
  }

  return api_hostname;
};
