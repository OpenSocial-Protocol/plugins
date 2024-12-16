import type { QuestVerifyResponseVo } from "./QuestVerifyResponseVo";
import type { QuestVerifyRequestVo } from "./QuestVerifyRequestVo";

 /**
 * @description Successful operation
*/
export type QuestVerify200 = QuestVerifyResponseVo;
export type QuestVerifyMutationRequest = QuestVerifyRequestVo;
/**
 * @description Successful operation
*/
export type QuestVerifyMutationResponse = Omit<NonNullable<QuestVerifyResponseVo>, "responseEnum">;
export type QuestVerifyMutation = {
    Response: QuestVerifyMutationResponse;
    Request: QuestVerifyMutationRequest;
};