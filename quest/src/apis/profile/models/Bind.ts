import type { WebResponseBoolean } from "./WebResponseBoolean";

 export type BindQueryParams = {
    /**
     * @description IM用户ID
     * @type string
    */
    imUid: string;
    /**
     * @description 设备locale
     * @type string | undefined
    */
    locale?: string;
};
export type BindHeaderParams = {
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
export type Bind200 = WebResponseBoolean;
/**
 * @description Successful operation
*/
export type BindMutationResponse = WebResponseBoolean;
export type BindMutation = {
    Response: BindMutationResponse;
    QueryParams: BindQueryParams;
    HeaderParams: BindHeaderParams;
};