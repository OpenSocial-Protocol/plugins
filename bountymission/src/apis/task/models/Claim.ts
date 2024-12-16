import type { WebResultClaimVo } from "./WebResultClaimVo";

 export type ClaimPathParams = {
    /**
     * @description 支持的值 nft/redeem
     * @type string
    */
    type: string;
};
export type ClaimQueryParams = {
    /**
     * @description 兑换码
     * @type string | undefined
    */
    code?: string;
};
export type ClaimHeaderParams = {
    /**
     * @type string
    */
    saas_id: string;
};
/**
 * @description 成功
*/
export type Claim200 = WebResultClaimVo;
/**
 * @description 成功
*/
export type ClaimMutationResponse = Omit<NonNullable<WebResultClaimVo>, "responseEnum">;
export type ClaimMutation = {
    Response: ClaimMutationResponse;
    PathParams: ClaimPathParams;
    QueryParams: ClaimQueryParams;
    HeaderParams: ClaimHeaderParams;
};