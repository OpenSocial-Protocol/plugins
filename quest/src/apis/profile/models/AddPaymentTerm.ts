import type { WebResponse } from "./WebResponse";
import type { PaymentTermRequest } from "./PaymentTermRequest";

 /**
 * @description Successful operation
*/
export type AddPaymentTerm200 = WebResponse;
export type AddPaymentTermMutationRequest = PaymentTermRequest;
/**
 * @description Successful operation
*/
export type AddPaymentTermMutationResponse = WebResponse;
export type AddPaymentTermMutation = {
    Response: AddPaymentTermMutationResponse;
    Request: AddPaymentTermMutationRequest;
};