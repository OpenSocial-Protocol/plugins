import type { WebResult } from "./WebResult";

 export type S2RewardReceivePostQueryParams = {
    /**
     * @type string
    */
    customerId: string;
    /**
     * @type string
    */
    taskId: string;
    /**
     * @description 事件附加属性
     * @type string | undefined
    */
    extendAttr?: string;
};
export type S2RewardReceivePostHeaderParams = {
    /**
     * @type string
    */
    saas_id: string;
    /**
     * @type string
    */
    Authorization: string;
};
/**
 * @description 成功
*/
export type S2RewardReceivePost200 = WebResult;
/**
 * @description 成功
*/
export type S2RewardReceivePostMutationResponse = Omit<NonNullable<WebResult>, "responseEnum">;
export type S2RewardReceivePostMutation = {
    Response: S2RewardReceivePostMutationResponse;
    QueryParams: S2RewardReceivePostQueryParams;
    HeaderParams: S2RewardReceivePostHeaderParams;
};