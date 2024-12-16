import Request from "./Request";
const request = new Request({
  baseURL: process.env.ENDPOINT + "/api",
  timeout: 5000,
});

export default request;
