import type { WebResultCurrentUserVo } from "./WebResultCurrentUserVo";

 export type CustomerInfoPathParams = {
    /**
     * @description 业务方用户 id
     * @type string
    */
    cid: string;
};
export type CustomerInfoQueryParams = {
    /**
     * @description 默认返回 twitterName, 支持 asset 等
     * @type string | undefined
    */
    businessType?: string;
};
export type CustomerInfoHeaderParams = {
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
export type CustomerInfo200 = WebResultCurrentUserVo;
/**
 * @description Successful operation
*/
export type CustomerInfoQueryResponse = Omit<NonNullable<WebResultCurrentUserVo>, "responseEnum">;
export type CustomerInfoQuery = {
    Response: CustomerInfoQueryResponse;
    PathParams: CustomerInfoPathParams;
    QueryParams: CustomerInfoQueryParams;
    HeaderParams: CustomerInfoHeaderParams;
};