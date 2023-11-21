import { getCookies } from "./storage";


export const baseUrl = "https://jsonplaceholder.typicode.com/";

const HTTP_STATUS_MESSAGE = {
  400: "400 Bad Request",
  401: "401 Unauthorized",
  403: "403 Forbidden",
  404: "404 Not Found",
  405: "405 Method Not Allowed",
  406: "406 Not Acceptable",
  500: "500 Internal Service Error",
  501: "501 Not Implemented",
  502: "502 Bad Gateway",
  503: "503 Service Unavailable",
  504: "504 Gateway Timeout",
  505: "505 HTTP Version Not Supported",
};

export const fetchWrapper = {
  get,
  post,
  put,
  patch,
  delete: _delete,
  postFormData,
  putFormData,
  patchFormData,
};

const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

async function get(url, header) {
  const requestOptions = {
    method: "GET",
    headers: {
      ...jsonHeaders,
      ...authHeader(url,header),
    },
  };

  return fetch(url, requestOptions).then(handleResponse);
}

async function post(url, body, header) {
  const requestOptions = {
    method: "POST",
    headers: {
      ...jsonHeaders,
      ...authHeader(url, header),
    },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

async function put(url, body, header) {
  const requestOptions = {
    method: "PUT",
    headers: {
      ...jsonHeaders,
      ...authHeader(url, header),
    },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

async function patch(url, body, header) {
  const requestOptions = {
    method: "PATCH",
    headers: {
      ...jsonHeaders,
      ...authHeader(url, header),
    },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(url, header) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      ...jsonHeaders,
      ...authHeader(url, header),
    },
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function authHeader(_,header) {
  // return auth header with jwt if user is logged in and request is to the api url
  const token = getCookies("token");
  let customHeader = {};
  if (header) customHeader = header;
  return {
    Authorization: `Bearer ${token || null}`,
    ...customHeader,
  };
}

function handleResponse(response) {
  try {
    if (!response.ok) {
      return response.text().then((text) => {
        const data = text && JSON.parse(text);
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        if (response.status === 401) {
        //   userService.logoutTokenExpired();
        //   userService.handleTokenExpired(true);
        }
        return Promise.reject(data);
      });
    }
    const contentType = response.headers.get("content-type");

    if (contentType.includes("application/json")) {
      return response.json().then((data) => {
        return data;
      });
    }

    if (contentType.includes("application/zip")) {
      return response.blob().then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        return objectURL;
      });
    }

    if (contentType.includes("text/csv")) {
      return response.blob().then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        return objectURL;
      });
    }

    return response.text().then((text) => {
      return text;
    });
  } catch (error) {
    return Promise.reject({
      err_code: response.status,
      err_message: HTTP_STATUS_MESSAGE[response.status],
    });
  }
}

async function postFormData(url, formData, header) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(url, header),
    body: formData,
  };

  return fetch(url, requestOptions).then(handleResponse);
}

async function putFormData(url, formData, header) {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(url, header),
    body: formData,
  };
  return fetch(url, requestOptions).then(handleResponse);
}

async function patchFormData(url, formData, header) {
  const requestOptions = {
    method: "PATCH",
    headers: authHeader(url, header),
    body: formData,
  };
  return fetch(url, requestOptions).then(handleResponse);
}
