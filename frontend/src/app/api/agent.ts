import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

//Getting the response data
const responseBody = (response: AxiosResponse) => response.data;

//Creating request object for all the request we need
const request = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
  list: () => request.get("products"),
  details: (id: number) => request.get(`products/${id}`),
};

const TestErrors = {
  get400Error: () => request.get("buggy/bad-request"),
  get401Error: () => request.get("buggy/unauthorized"),
  get404Error: () => request.get("buggy/not-found"),
  get500Error: () => request.get("buggy/server-error"),
  getValidationError: () => request.get("buggy/validation-error"),
};

const agent = {
  Catalog,
  TestErrors,
};

export default agent;
