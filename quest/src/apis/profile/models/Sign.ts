import type { WebResponseSignInfoResponse } from "./WebResponseSignInfoResponse";

 export type SignHeaderParams = {
    /**
     * @description 设备ID
     * @type string
    */
    device_id: string;
    /**
     * @description 业务线
     * @type string
    */
    saas_id: string;
};
/**
 * @description Successful operation
*/
export type Sign200 = WebResponseSignInfoResponse;
/**
 * @description Successful operation
*/
export type SignQueryResponse = WebResponseSignInfoResponse;
export type SignQuery = {
    Response: SignQueryResponse;
    HeaderParams: SignHeaderParams;
};