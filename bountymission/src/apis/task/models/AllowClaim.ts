import type { WebResult } from "./WebResult";

 export type AllowClaimPathParams = {
    /**
     * @description 支持的值 nft
     * @type string
    */
    type: string;
};
export type AllowClaimHeaderParams = {
    /**
     * @type string
    */
    saas_id: string;
};
/**
 * @description 成功
*/
export type AllowClaim200 = WebResult;
/**
 * @description 成功
*/
export type AllowClaimQueryResponse = Omit<NonNullable<WebResult>, "responseEnum">;
export type AllowClaimQuery = {
    Response: AllowClaimQueryResponse;
    PathParams: AllowClaimPathParams;
    HeaderParams: AllowClaimHeaderParams;
};