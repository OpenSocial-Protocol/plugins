import type { ApplyPostResponseVo } from "./ApplyPostResponseVo";
import type { ApplyPostRequestVo } from "./ApplyPostRequestVo";

 /**
 * @description Successful operation
*/
export type WishApplyPost200 = ApplyPostResponseVo;
export type WishApplyPostMutationRequest = ApplyPostRequestVo;
/**
 * @description Successful operation
*/
export type WishApplyPostMutationResponse = Omit<NonNullable<ApplyPostResponseVo>, "responseEnum">;
export type WishApplyPostMutation = {
    Response: WishApplyPostMutationResponse;
    Request: WishApplyPostMutationRequest;
};