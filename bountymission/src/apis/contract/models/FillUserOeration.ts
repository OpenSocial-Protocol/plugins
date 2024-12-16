import type { WebResultFillUserOperation } from "./WebResultFillUserOperation";
import type { UserOperationVo } from "./UserOperationVo";

 /**
 * @description OK
*/
export type FillUserOeration200 = WebResultFillUserOperation;
export type FillUserOerationMutationRequest = UserOperationVo;
/**
 * @description OK
*/
export type FillUserOerationMutationResponse = Omit<NonNullable<WebResultFillUserOperation>, "responseEnum">;
export type FillUserOerationMutation = {
    Response: FillUserOerationMutationResponse;
    Request: FillUserOerationMutationRequest;
};