import type { WebResultCustomerVo } from "./WebResultCustomerVo";
import type { BindRequest } from "./BindRequest";

 export type BindHeaderParams = {
    /**
     * @type string | undefined
    */
    saas_id?: string;
};
/**
 * @description Successful operation
*/
export type Bind200 = WebResultCustomerVo;
export type BindMutationRequest = BindRequest;
/**
 * @description Successful operation
*/
export type BindMutationResponse = Omit<NonNullable<WebResultCustomerVo>, "responseEnum">;
export type BindMutation = {
    Response: BindMutationResponse;
    Request: BindMutationRequest;
    HeaderParams: BindHeaderParams;
};