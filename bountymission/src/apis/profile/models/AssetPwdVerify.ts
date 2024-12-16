import type { WebResponse } from "./WebResponse";

 export type AssetPwdVerifyQueryParams = {
    /**
     * @type string
    */
    assetPwd: string;
};
/**
 * @description OK
*/
export type AssetPwdVerify200 = WebResponse;
/**
 * @description OK
*/
export type AssetPwdVerifyMutationResponse = WebResponse;
export type AssetPwdVerifyMutation = {
    Response: AssetPwdVerifyMutationResponse;
    QueryParams: AssetPwdVerifyQueryParams;
};