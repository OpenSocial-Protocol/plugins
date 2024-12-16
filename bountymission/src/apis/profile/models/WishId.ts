import type { WebResultGetIdResponseVo } from "./WebResultGetIdResponseVo";

 /**
 * @description Successful operation
*/
export type WishId200 = WebResultGetIdResponseVo;
/**
 * @description Successful operation
*/
export type WishIdQueryResponse = Omit<NonNullable<WebResultGetIdResponseVo>, "responseEnum">;
export type WishIdQuery = {
    Response: WishIdQueryResponse;
};