import type { WebResponse } from "./WebResponse";
import type { PaymentTermRequest } from "./PaymentTermRequest";

 export type ModifyPaymentTermPathParams = {
    /**
     * @description 卡账号
     * @type string
    */
    id: string;
};
/**
 * @description Successful operation
*/
export type ModifyPaymentTerm200 = WebResponse;
export type ModifyPaymentTermMutationRequest = PaymentTermRequest;
/**
 * @description Successful operation
*/
export type ModifyPaymentTermMutationResponse = WebResponse;
export type ModifyPaymentTermMutation = {
    Response: ModifyPaymentTermMutationResponse;
    Request: ModifyPaymentTermMutationRequest;
    PathParams: ModifyPaymentTermPathParams;
};