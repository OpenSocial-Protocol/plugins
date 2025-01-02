import type { GasPolicyResponse } from "./GasPolicyResponse";
import type { UserOperationVo } from "./UserOperationVo";

 /**
 * @description OK
*/
export type GasPolicy200 = GasPolicyResponse;
export type GasPolicyMutationRequest = UserOperationVo;
/**
 * @description OK
*/
export type GasPolicyMutationResponse = Omit<NonNullable<GasPolicyResponse>, "responseEnum">;
export type GasPolicyMutation = {
    Response: GasPolicyMutationResponse;
    Request: GasPolicyMutationRequest;
};