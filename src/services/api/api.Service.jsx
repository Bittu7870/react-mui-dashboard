import { fetch } from "../fetch.Service";
import { API_PATH } from "../../constant/path";

export const savePostApi = (options) => {
  return fetch("post", API_PATH + "savePost", JSON.stringify(options), {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  });
};
export const RegisterApi = (options) => {
  return fetch("post", API_PATH + "customerReg", JSON.stringify(options), {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  });
};
export const LoginApi = (options) => {
  return fetch("post", API_PATH + "logincheck", JSON.stringify(options), {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  });
};
export const ProductsApi = () => {
  return fetch(
    "post",
    API_PATH + "products",
    {},
    {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  );
};
