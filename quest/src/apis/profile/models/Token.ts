import type { WebResponse } from "./WebResponse";

 export type TokenQueryParams = {
    /**
     * @description 申请授权时长,默认1800s
     * @default 1800
     * @type integer | undefined, int64
    */
    durationInSecond?: number;
    /**
     * @description 申请授权类型，默认存储类型storage
     * @default "storage"
     * @type string | undefined
    */
    category?: string;
    /**
     * @description 申请授权资源，比如bucketName
     * @type string | undefined
    */
    resource?: string;
};
/**
 * @description Successful operation
*/
export type Token200 = WebResponse;
/**
 * @description Successful operation
*/
export type TokenQueryResponse = WebResponse;
export type TokenQuery = {
    Response: TokenQueryResponse;
    QueryParams: TokenQueryParams;
};