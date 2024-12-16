import { PluginAPI } from "@open-social-protocol/osp-plugin-api-types";

declare global {
  const ospSandbox: PluginAPI;

  // function setTimeout(callback: Function, timeout: number): number
  // function clearTimeout(handle: number): void
  // function setInterval(callback: Function, timeout: number): number
  // function clearInterval(handle: number): void

  // const fetch: (url: string, init?: FetchOptions) => Promise<FetchResponse>


  // interface FetchOptions {
  //     method?: string
  //     headers?: { [name: string]: string }
  //     /**
  //      * @deprecated use headers instead
  //      */
  //     headersObject?: { [name: string]: string }
  //     body?: Uint8Array | string
  //     credentials?: string
  //     cache?: string
  //     redirect?: string
  //     referrer?: string
  //     integrity?: string
  // }

  // interface FetchResponse {
  //     headersObject: { [name: string]: string }
  //     ok: boolean
  //     redirected: boolean
  //     status: number
  //     statusText: string
  //     type: string
  //     url: string
  //     arrayBuffer(): Promise<ArrayBuffer>
  //     text(): Promise<string>
  //     json(): Promise<any>
  // }
}


export {};
