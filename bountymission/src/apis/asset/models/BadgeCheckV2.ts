import type { WebResultNftMintCheckResponseVo } from "./WebResultNftMintCheckResponseVo";
import type { BadgeCheckRequest } from "./BadgeCheckRequest";

 /**
 * @description Successful operation
*/
export type BadgeCheckV2200 = WebResultNftMintCheckResponseVo;
export type BadgeCheckV2MutationRequest = BadgeCheckRequest;
/**
 * @description Successful operation
*/
export type BadgeCheckV2MutationResponse = Omit<NonNullable<WebResultNftMintCheckResponseVo>, "responseEnum">;
export type BadgeCheckV2Mutation = {
    Response: BadgeCheckV2MutationResponse;
    Request: BadgeCheckV2MutationRequest;
};