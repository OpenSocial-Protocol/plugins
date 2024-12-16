import type { WebResultGetWishDetailResponseVo } from "./WebResultGetWishDetailResponseVo";

 export type WishDetailPathParams = {
    /**
     * @description Wish Id
     * @type string
    */
    id: string;
};
/**
 * @description Successful operation
*/
export type WishDetail200 = WebResultGetWishDetailResponseVo;
/**
 * @description Successful operation
*/
export type WishDetailQueryResponse = Omit<NonNullable<WebResultGetWishDetailResponseVo>, "responseEnum">;
export type WishDetailQuery = {
    Response: WishDetailQueryResponse;
    PathParams: WishDetailPathParams;
};