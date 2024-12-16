import type { QuestsBindTwitterResponseVo } from "./QuestsBindTwitterResponseVo";
import type { QuestsBindTwitterRequestVo } from "./QuestsBindTwitterRequestVo";

 /**
 * @description Successful operation
*/
export type BindTwitter200 = QuestsBindTwitterResponseVo;
export type BindTwitterMutationRequest = QuestsBindTwitterRequestVo;
/**
 * @description Successful operation
*/
export type BindTwitterMutationResponse = Omit<NonNullable<QuestsBindTwitterResponseVo>, "responseEnum">;
export type BindTwitterMutation = {
    Response: BindTwitterMutationResponse;
    Request: BindTwitterMutationRequest;
};