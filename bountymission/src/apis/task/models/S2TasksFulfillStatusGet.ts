import type { WebResultTaskFulfillVo } from "./WebResultTaskFulfillVo";

 export type S2TasksFulfillStatusGetQueryParams = {
    /**
     * @description 其他平台用户ID
     * @type string
    */
    cid: string;
    /**
     * @description 任务id
     * @type string
    */
    taskId: string;
};
export type S2TasksFulfillStatusGetHeaderParams = {
    /**
     * @type string
    */
    Authorization: string;
    /**
     * @description saasId
     * @type string
    */
    saas_id: string;
};
/**
 * @description 成功
*/
export type S2TasksFulfillStatusGet200 = WebResultTaskFulfillVo;
/**
 * @description 成功
*/
export type S2TasksFulfillStatusGetQueryResponse = Omit<NonNullable<WebResultTaskFulfillVo>, "responseEnum">;
export type S2TasksFulfillStatusGetQuery = {
    Response: S2TasksFulfillStatusGetQueryResponse;
    QueryParams: S2TasksFulfillStatusGetQueryParams;
    HeaderParams: S2TasksFulfillStatusGetHeaderParams;
};