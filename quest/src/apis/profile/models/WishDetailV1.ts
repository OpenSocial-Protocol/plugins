import type { WebResultGetWishDetailResponseVo } from "./WebResultGetWishDetailResponseVo";

 export type WishDetailV1PathParams = {
    /**
     * @description Wish Id
     * @type string
    */
    id: string;
};
/**
 * @description Successful operation
*/
export type WishDetailV1200 = WebResultGetWishDetailResponseVo;
/**
 * @description Successful operation
*/
export type WishDetailV1QueryResponse = Omit<NonNullable<WebResultGetWishDetailResponseVo>, "responseEnum">;
export type WishDetailV1Query = {
    Response: WishDetailV1QueryResponse;
    PathParams: WishDetailV1PathParams;
};