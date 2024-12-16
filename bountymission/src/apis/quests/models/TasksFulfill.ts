import type { QuestsVerifyTaskResponseVo } from "./QuestsVerifyTaskResponseVo";
import type { QuestsVerifyTaskRequestVo } from "./QuestsVerifyTaskRequestVo";

 /**
 * @description Successful operation
*/
export type TasksFulfill200 = QuestsVerifyTaskResponseVo;
export type TasksFulfillMutationRequest = QuestsVerifyTaskRequestVo;
/**
 * @description Successful operation
*/
export type TasksFulfillMutationResponse = Omit<NonNullable<QuestsVerifyTaskResponseVo>, "responseEnum">;
export type TasksFulfillMutation = {
    Response: TasksFulfillMutationResponse;
    Request: TasksFulfillMutationRequest;
};