import type { WebResultRewardResultVo } from "./WebResultRewardResultVo";

 export type V2RewardGrantPostQueryParams = {
    /**
     * @type array
    */
    address: string[];
    /**
     * @type string
    */
    price: string;
    /**
     * @type string
    */
    desc: string;
    /**
     * @type string | undefined
    */
    businessId?: string;
};
export type V2RewardGrantPostHeaderParams = {
    /**
     * @type string
    */
    saas_id: string;
    /**
     * @description app授权码
     * @type string
    */
    sign: string;
};
/**
 * @description 成功
*/
export type V2RewardGrantPost200 = WebResultRewardResultVo;
/**
 * @description 成功
*/
export type V2RewardGrantPostMutationResponse = Omit<NonNullable<WebResultRewardResultVo>, "responseEnum">;
export type V2RewardGrantPostMutation = {
    Response: V2RewardGrantPostMutationResponse;
    QueryParams: V2RewardGrantPostQueryParams;
    HeaderParams: V2RewardGrantPostHeaderParams;
};