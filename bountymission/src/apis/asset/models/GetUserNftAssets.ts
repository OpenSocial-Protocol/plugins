import type { WebResultNftAssetsVo } from "./WebResultNftAssetsVo";

 /**
 * @description Successful operation
*/
export type GetUserNftAssets200 = WebResultNftAssetsVo;
/**
 * @description Successful operation
*/
export type GetUserNftAssetsQueryResponse = Omit<NonNullable<WebResultNftAssetsVo>, "responseEnum">;
export type GetUserNftAssetsQuery = {
    Response: GetUserNftAssetsQueryResponse;
};