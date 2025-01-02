import type { WebResultBadgeCheckResultResponseVo } from "./WebResultBadgeCheckResultResponseVo";

 /**
 * @description Successful operation
*/
export type GetNftMintCheckResult200 = WebResultBadgeCheckResultResponseVo;
/**
 * @description Successful operation
*/
export type GetNftMintCheckResultQueryResponse = Omit<NonNullable<WebResultBadgeCheckResultResponseVo>, "responseEnum">;
export type GetNftMintCheckResultQuery = {
    Response: GetNftMintCheckResultQueryResponse;
};