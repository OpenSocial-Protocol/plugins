/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import { BaseApiResponse, ExpandAxiosRequestConfig } from "./apiTypes";

export default class Request {
  private _instance: AxiosInstance;
  // 默认配置
  private _defaultConfig: ExpandAxiosRequestConfig = {
    baseURL: "/api",
    timeout: 5000,
    requestOptions: {
      globalErrorMessage: true,
      globalSuccessMessage: false,
    },
  };
  // private _interceptorHooks?: InterceptorHooks;

  constructor(config: ExpandAxiosRequestConfig) {
    this._instance = axios.create(Object.assign(this._defaultConfig, config));
    // this._interceptorHooks = config.interceptorHooks;
    // this.setupInterceptors();
  }

  // 通用拦截，在初始化时就进行注册和运行，对基础属性进行处理
  private setupInterceptors() {
    // this._instance.interceptors.request.use(
    //   this._interceptorHooks?.requestInterceptor,
    //   this._interceptorHooks?.requestInterceptorCatch
    // );
    // this._instance.interceptors.response.use(
    //   this._interceptorHooks?.responseInterceptor,
    //   this._interceptorHooks?.responseInterceptorCatch
    // );
  }

  // 定义核心请求
  public request(config: ExpandAxiosRequestConfig): Promise<AxiosResponse> {
    // ！！！⚠️ 注意：axios 已经将请求使用 promise 封装过了
    // 这里直接返回，不需要我们再使用 promise 封装一层
    return this._instance.request(config);
  }

  public get<T = any>(
    url: string,
    config?: ExpandAxiosRequestConfig
  ): Promise<BaseApiResponse<T>> {
    return this._instance.get(url, config).then((res) => {
      return {
        code: res.status,
        msg: res.statusText,
        data: res.data.data,
        success: res.status === 200,
      };
    });
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig
  ): Promise<BaseApiResponse<T>> {
    return this._instance.post(url, data, config).then((res) => {
      return {
        code: res.status,
        msg: res.statusText,
        data: res.data.data,
        success: res.status === 200,
      };
    });
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: ExpandAxiosRequestConfig
  ): Promise<T> {
    return this._instance.put(url, data, config);
  }

  public delete<T = any>(
    url: string,
    config?: ExpandAxiosRequestConfig
  ): Promise<T> {
    return this._instance.delete(url, config);
  }
}
