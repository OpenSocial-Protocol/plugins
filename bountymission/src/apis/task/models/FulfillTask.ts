import type { WebResult } from "./WebResult";

 export type FulfillTaskQueryParams = {
    /**
     * @description 用户id、address
     * @type string
    */
    cid: string;
    /**
     * @description 事件名称
     * @type string
    */
    name: string;
    /**
     * @description 当前事件对应的资源id
     * @type string
    */
    contentId: string;
    /**
     * @description 当前事件对应的时间戳
     * @type integer, int64
    */
    eventTime: number;
    /**
     * @description 当前事件对应的资源的原资源用户id
     * @type string | undefined
    */
    targetUserId?: string;
    /**
     * @description 当前事件对应的资源的原资源id
     * @type string | undefined
    */
    targetContentId?: string;
    /**
     * @description 当前事件附加属性
     * @type string | undefined
    */
    extendAttr?: string;
};
export type FulfillTaskHeaderParams = {
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
export type FulfillTask200 = WebResult;
/**
 * @description 失败
*/
export type FulfillTask400 = WebResult;
/**
 * @description 成功
*/
export type FulfillTaskMutationResponse = Omit<NonNullable<WebResult>, "responseEnum">;
export type FulfillTaskMutation = {
    Response: FulfillTaskMutationResponse;
    QueryParams: FulfillTaskQueryParams;
    HeaderParams: FulfillTaskHeaderParams;
    Errors: FulfillTask400;
};