import type { WebResultCustomerVo } from "./WebResultCustomerVo";
import type { LoginRequest } from "./LoginRequest";

 export type LoginHeaderParams = {
    /**
     * @type string | undefined
    */
    saas_id?: string;
    /**
     * @type string | undefined
    */
    deviceType?: string;
};
/**
 * @description Successful operation
*/
export type Login200 = WebResultCustomerVo;
export type LoginMutationRequest = LoginRequest;
/**
 * @description Successful operation
*/
export type LoginMutationResponse = Omit<NonNullable<WebResultCustomerVo>, "responseEnum">;
export type LoginMutation = {
    Response: LoginMutationResponse;
    Request: LoginMutationRequest;
    HeaderParams: LoginHeaderParams;
};