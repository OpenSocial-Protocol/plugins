import type { WebResultCustomerBindEmail } from "./WebResultCustomerBindEmail";

 export type CustomerBindEmailQueryParams = {
    /**
     * @description email to bind
     * @type string
    */
    email: string;
    /**
     * @description verify code
     * @type string
    */
    verifyCode: string;
    /**
     * @description nft badge series
     * @type string
    */
    series: string;
};
export type CustomerBindEmailHeaderParams = {
    /**
     * @description saas_id
     * @type string
    */
    saas_id: string;
};
/**
 * @description Successful operation
*/
export type CustomerBindEmail200 = WebResultCustomerBindEmail;
/**
 * @description Successful operation
*/
export type CustomerBindEmailMutationResponse = Omit<NonNullable<WebResultCustomerBindEmail>, "responseEnum">;
export type CustomerBindEmailMutation = {
    Response: CustomerBindEmailMutationResponse;
    QueryParams: CustomerBindEmailQueryParams;
    HeaderParams: CustomerBindEmailHeaderParams;
};