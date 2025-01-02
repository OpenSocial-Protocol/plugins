import type { QuestsVerifyTaskResponseVo } from "./QuestsVerifyTaskResponseVo";
import type { QuestsVerifyTaskRequestVo } from "./QuestsVerifyTaskRequestVo";

 /**
 * @description Successful operation
*/
export type VerifyTask200 = QuestsVerifyTaskResponseVo;
export type VerifyTaskMutationRequest = QuestsVerifyTaskRequestVo;
/**
 * @description Successful operation
*/
export type VerifyTaskMutationResponse = Omit<NonNullable<QuestsVerifyTaskResponseVo>, "responseEnum">;
export type VerifyTaskMutation = {
    Response: VerifyTaskMutationResponse;
    Request: VerifyTaskMutationRequest;
};