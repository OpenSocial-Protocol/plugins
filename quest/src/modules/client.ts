import type {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { CHAIN_ID, EOA_ADDRESS, ID_TOKEN } from "./constant";

import axios from "axios";
import { RefreshTokenAndReFetch } from "./refreshTokenAndReFetch";

// import { fetch as fetchNetwork } from "@react-native-community/netinfo";
// import { getStorageItemAsync } from "@/hooks/useStorageState";
// import { isWeb } from "./device";
// import { sessionKey } from "@/configs/key";
// import { v4 as uuidv4 } from "uuid";

// declare const AXIOS_BASE: string;
declare const AXIOS_HEADERS: string;

/**
 * Subset of AxiosRequestConfig
 */
export type RequestConfig<TData = unknown> = {
  baseURL?: string;
  url?: string;
  method: "get" | "put" | "patch" | "post" | "delete";
  params?: unknown;
  data?: TData;
  responseType?:
  | "arraybuffer"
  | "blob"
  | "document"
  | "json"
  | "text"
  | "stream";
  signal?: AbortSignal;
  headers?: AxiosRequestConfig["headers"];
};
/**
 * Subset of AxiosResponse
 */
export type ResponseConfig<TData = unknown> = {
  data: TData;
  status: number;
  statusText: string;
  headers?: AxiosResponse["headers"];
};

export const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    ...(typeof AXIOS_HEADERS !== "undefined"
      ? (JSON.parse(AXIOS_HEADERS) as AxiosHeaders)
      : undefined),
    saas_id: "zeek",
  },
  withCredentials: false,

});

//添加请求拦截器
axiosInstance.interceptors.request.use(
  async (config) => {
    // const state = await fetchNetwork();
    // if (!state.isConnected) {
    //   throw new Error("Network Error");
    // }

    // 在请求头中添加 JWT Token
    const token = localStorage.getItem(ID_TOKEN);
    const eoaAddress = localStorage.getItem(EOA_ADDRESS);
    const chainId = localStorage.getItem(CHAIN_ID);
    if (token) {
      // config.headers['Authorization'] = `Bearer ${token}`;
      console.log(config.url);
      config.headers[ID_TOKEN] = `${token}`;
      config.headers[CHAIN_ID] = `${chainId}`;
    }
    // if (!isWeb) {
    //   config.headers["Accept-Encoding"] = `*`;
    // }
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// @ts-expect-error
axiosInstance.interceptors.response.use(async (response) => {
  console.log("response:--client-0", response?.data, response?.data?.msgKey === "customer.login.required")
  if (response?.data?.msgKey === "customer.login.required") {
    const { accessToken, idToken } = await RefreshTokenAndReFetch.getInstance().refreshToken() || {};
    console.log("response:--client-0", idToken)

    if (idToken) {
      localStorage.setItem(ID_TOKEN, idToken)
      const configData = response?.config
      // @ts-expect-error
      return axiosClient(configData)
    }
  }
  return response;
}, async (error) => {
  return Promise.reject(error);
});

export const axiosClient = async <
  TData,
  TError = unknown,
  TVariables = unknown
>(
  config: RequestConfig<TVariables>
): Promise<ResponseConfig<TData>> => {
  const promise = axiosInstance
    .request<TData, ResponseConfig<TData>>(config)
    .catch((e: AxiosError<TError>) => {
      throw e;
    });

  return promise;
};

export default axiosClient;
