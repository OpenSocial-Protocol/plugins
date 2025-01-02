import type { GasPolicyResponse } from "./GasPolicyResponse";
import type { UserOperationVo } from "./UserOperationVo";

 /**
 * @description OK
*/
export type UserGasCreditPolicy200 = GasPolicyResponse;
export type UserGasCreditPolicyMutationRequest = UserOperationVo;
/**
 * @description OK
*/
export type UserGasCreditPolicyMutationResponse = Omit<NonNullable<GasPolicyResponse>, "responseEnum">;
export type UserGasCreditPolicyMutation = {
    Response: UserGasCreditPolicyMutationResponse;
    Request: UserGasCreditPolicyMutationRequest;
};