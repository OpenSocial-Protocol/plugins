import type { GasSubsidyResponse } from "./GasSubsidyResponse";
import type { UserOperationVo } from "./UserOperationVo";

 /**
 * @description OK
*/
export type GasSubsidy200 = GasSubsidyResponse;
export type GasSubsidyMutationRequest = UserOperationVo;
/**
 * @description OK
*/
export type GasSubsidyMutationResponse = Omit<NonNullable<GasSubsidyResponse>, "responseEnum">;
export type GasSubsidyMutation = {
    Response: GasSubsidyMutationResponse;
    Request: GasSubsidyMutationRequest;
};