import type { WebResultTwittersVo } from "./WebResultTwittersVo";

 export type TwitterInfosPathParams = {
    /**
     * @description 业务方用户 id
     * @type string
    */
    cid: string;
};
export type TwitterInfosHeaderParams = {
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
export type TwitterInfos200 = WebResultTwittersVo;
/**
 * @description Successful operation
*/
export type TwitterInfosQueryResponse = Omit<NonNullable<WebResultTwittersVo>, "responseEnum">;
export type TwitterInfosQuery = {
    Response: TwitterInfosQueryResponse;
    PathParams: TwitterInfosPathParams;
    HeaderParams: TwitterInfosHeaderParams;
};