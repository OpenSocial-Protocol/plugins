import type { WebResultCustomerVo } from "./WebResultCustomerVo";

 export type CustomerHeaderParams = {
    /**
     * @description jwtToken
     * @type string | undefined
    */
    JWT_TOKEN?: string;
};
/**
 * @description Successful operation
*/
export type Customer200 = WebResultCustomerVo;
/**
 * @description Successful operation
*/
export type CustomerQueryResponse = Omit<NonNullable<WebResultCustomerVo>, "responseEnum">;
export type CustomerQuery = {
    Response: CustomerQueryResponse;
    HeaderParams: CustomerHeaderParams;
};