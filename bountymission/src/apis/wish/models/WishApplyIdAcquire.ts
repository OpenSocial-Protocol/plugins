import type { WebResultGetIdResponseVo } from "./WebResultGetIdResponseVo";

 /**
 * @description Successful operation
*/
export type WishApplyIdAcquire200 = WebResultGetIdResponseVo;
/**
 * @description Successful operation
*/
export type WishApplyIdAcquireQueryResponse = Omit<NonNullable<WebResultGetIdResponseVo>, "responseEnum">;
export type WishApplyIdAcquireQuery = {
    Response: WishApplyIdAcquireQueryResponse;
};