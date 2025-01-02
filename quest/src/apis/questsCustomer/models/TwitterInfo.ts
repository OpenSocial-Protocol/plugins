import type { WebResultTwitterVo } from "./WebResultTwitterVo";

 export type TwitterInfoPathParams = {
    /**
     * @description 业务方用户 id
     * @type string
    */
    cid: string;
};
export type TwitterInfoHeaderParams = {
    /**
     * @type string
    */
    Authorization: string;
    /**
     * @type string
    */
    saas_id: string;
};
/**
 * @description Successful operation
*/
export type TwitterInfo200 = WebResultTwitterVo;
/**
 * @description Successful operation
*/
export type TwitterInfoQueryResponse = Omit<NonNullable<WebResultTwitterVo>, "responseEnum">;
export type TwitterInfoQuery = {
    Response: TwitterInfoQueryResponse;
    PathParams: TwitterInfoPathParams;
    HeaderParams: TwitterInfoHeaderParams;
};