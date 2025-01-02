import type { WebResultCustomerVerifyCode } from "./WebResultCustomerVerifyCode";

 export type GetVerifyCodeForBindEmailQueryParams = {
    /**
     * @description email to bind
     * @type string
    */
    email: string;
    /**
     * @description business type for operation
     * @type integer, int32
    */
    businessType: number;
    /**
     * @description nft badge series
     * @type string
    */
    series: string;
};
export type GetVerifyCodeForBindEmailHeaderParams = {
    /**
     * @description saas_id
     * @type string
    */
    saas_id: string;
};
/**
 * @description Successful operation
*/
export type GetVerifyCodeForBindEmail200 = WebResultCustomerVerifyCode;
/**
 * @description Successful operation
*/
export type GetVerifyCodeForBindEmailMutationResponse = Omit<NonNullable<WebResultCustomerVerifyCode>, "responseEnum">;
export type GetVerifyCodeForBindEmailMutation = {
    Response: GetVerifyCodeForBindEmailMutationResponse;
    QueryParams: GetVerifyCodeForBindEmailQueryParams;
    HeaderParams: GetVerifyCodeForBindEmailHeaderParams;
};