import type { QuestPostResponseVo } from "./QuestPostResponseVo";
import type { QuestPostRequestVo } from "./QuestPostRequestVo";

 /**
 * @description Successful operation
*/
export type QuestPost200 = QuestPostResponseVo;
export type QuestPostMutationRequest = QuestPostRequestVo;
/**
 * @description Successful operation
*/
export type QuestPostMutationResponse = Omit<NonNullable<QuestPostResponseVo>, "responseEnum">;
export type QuestPostMutation = {
    Response: QuestPostMutationResponse;
    Request: QuestPostMutationRequest;
};