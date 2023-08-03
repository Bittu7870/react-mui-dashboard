import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let show = false;
let session = false;

function handleError(error, reject) {
  if (!error) {
    if (show === false) {
      show = true;
      console.log("Something went wrong, Please try again");
      toast.error("Something went wrong, Please try again");
    }
  }

  if (error) {
    let status = error.status;
    if (status === 401) {
      if (session === false) {
        session = true;
        toast.error("Session expired, you are going to be logged out");
      }
    }
    if (status === 404) {
      toast.error("Internal Server error");
    }
    if (
      error.data.message === "You are not authorised to perform this action."
    ) {
      toast.error(error.data.message);
    }
  }
  reject(error);
  return;
}

const handleResponse = (success, resolve) => {
  resolve(success);
};

const setMethod = (method, path, body, options, params) => {
  let config = {};
  if (options) {
    config.headers = { ...options };
    console.log("config.headers", config.headers);
  }

  params = params ? "?" + new URLSearchParams(params).toString() : "";

  if (method === "get" || method === "delete") {
    return axios[method](`${path}${params}`, config);
  }
  if (method === "post" || method === "put") {
    return axios[method](`${path}`, body, config);
  }
};

const __fetch = (method, path, body, options, params) => {
  return new Promise((resolve, reject) => {
    return setMethod(method, path, body, params, options)
      .then((response) => {
        console.log(JSON.stringify(response));
        handleResponse(response, resolve);
        return;
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        handleError(err.response, reject);
      });
  });
};

export { __fetch as fetch };
