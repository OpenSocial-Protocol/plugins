import type { WebResponse } from "./WebResponse";

 export type SetAssetPasswordQueryParams = {
    /**
     * @type string
    */
    tokenId: string;
    /**
     * @type string
    */
    assetPwd: string;
    /**
     * @type string
    */
    reAssetPwd: string;
    /**
     * @type integer, int32
    */
    type: number;
};
/**
 * @description OK
*/
export type SetAssetPassword200 = WebResponse;
/**
 * @description OK
*/
export type SetAssetPasswordMutationResponse = WebResponse;
export type SetAssetPasswordMutation = {
    Response: SetAssetPasswordMutationResponse;
    QueryParams: SetAssetPasswordQueryParams;
};