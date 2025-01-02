import type { WebResultGrantBadgeResponseVo } from "./WebResultGrantBadgeResponseVo";
import type { WebResultGrantBadgeRequestVo } from "./WebResultGrantBadgeRequestVo";

 /**
 * @description Successful operation
*/
export type GrantBadge200 = WebResultGrantBadgeResponseVo;
export type GrantBadgeMutationRequest = WebResultGrantBadgeRequestVo;
/**
 * @description Successful operation
*/
export type GrantBadgeMutationResponse = Omit<NonNullable<WebResultGrantBadgeResponseVo>, "responseEnum">;
export type GrantBadgeMutation = {
    Response: GrantBadgeMutationResponse;
    Request: GrantBadgeMutationRequest;
};