import type { WebResultNftMintCheckResponseVo } from "./WebResultNftMintCheckResponseVo";

 /**
 * @description Successful operation
*/
export type BadgeCheck200 = WebResultNftMintCheckResponseVo;
/**
 * @description Successful operation
*/
export type BadgeCheckMutationResponse = Omit<NonNullable<WebResultNftMintCheckResponseVo>, "responseEnum">;
export type BadgeCheckMutation = {
    Response: BadgeCheckMutationResponse;
};