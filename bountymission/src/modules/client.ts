import type {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { EOA_ADDRESS, ID_TOKEN } from "./constant";

import axios from "axios";

// import { fetch as fetchNetwork } from "@react-native-community/netinfo";
// import { getStorageItemAsync } from "@/hooks/useStorageState";
// import { isWeb } from "./device";
// import { sessionKey } from "@/configs/key";
// import { v4 as uuidv4 } from "uuid";

declare const AXIOS_BASE: string;
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
  baseURL: typeof AXIOS_BASE !== "undefined" ? AXIOS_BASE : undefined,
  headers: {
    ...(typeof AXIOS_HEADERS !== "undefined"
      ? (JSON.parse(AXIOS_HEADERS) as AxiosHeaders)
      : undefined),
    saas_id: process.env.EXPO_PUBLIC_SAAS_ID || "zeek",
  },
  withCredentials: true, // 添加这一行
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
    if (token) {
      // config.headers['Authorization'] = `Bearer ${token}`;
      console.log(config.url);
      config.headers[ID_TOKEN] = `${token}`;
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
