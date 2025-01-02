import type { WebResultRewardResultVo } from "./WebResultRewardResultVo";

 export type S2RewardGrantPostQueryParams = {
    /**
     * @type string
    */
    customerId: string;
    /**
     * @type string
    */
    amount: string;
    /**
     * @type string
    */
    desc: string;
    /**
     * @type string | undefined
    */
    businessId?: string;
};
export type S2RewardGrantPostHeaderParams = {
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
export type S2RewardGrantPost200 = WebResultRewardResultVo;
/**
 * @description 成功
*/
export type S2RewardGrantPostMutationResponse = Omit<NonNullable<WebResultRewardResultVo>, "responseEnum">;
export type S2RewardGrantPostMutation = {
    Response: S2RewardGrantPostMutationResponse;
    QueryParams: S2RewardGrantPostQueryParams;
    HeaderParams: S2RewardGrantPostHeaderParams;
};