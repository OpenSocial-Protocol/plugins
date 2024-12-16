import type { WebResult } from "./WebResult";

 export type V2RewardReceivePostQueryParams = {
    /**
     * @type string
    */
    taskId: string;
};
export type V2RewardReceivePostHeaderParams = {
    /**
     * @type string
    */
    saas_id: string;
};
/**
 * @description 成功
*/
export type V2RewardReceivePost200 = WebResult;
/**
 * @description 成功
*/
export type V2RewardReceivePostMutationResponse = Omit<NonNullable<WebResult>, "responseEnum">;
export type V2RewardReceivePostMutation = {
    Response: V2RewardReceivePostMutationResponse;
    QueryParams: V2RewardReceivePostQueryParams;
    HeaderParams: V2RewardReceivePostHeaderParams;
};