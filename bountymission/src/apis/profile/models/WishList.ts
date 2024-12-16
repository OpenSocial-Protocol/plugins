import type { WebResultGetWishListResponseVo } from "./WebResultGetWishListResponseVo";
import type { GetWishListRequestVo } from "./GetWishListRequestVo";

 /**
 * @description Successful operation
*/
export type WishList200 = WebResultGetWishListResponseVo;
export type WishListMutationRequest = GetWishListRequestVo;
/**
 * @description Successful operation
*/
export type WishListMutationResponse = Omit<NonNullable<WebResultGetWishListResponseVo>, "responseEnum">;
export type WishListMutation = {
    Response: WishListMutationResponse;
    Request: WishListMutationRequest;
};