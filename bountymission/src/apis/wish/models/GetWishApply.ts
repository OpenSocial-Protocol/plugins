import type { WebResultGetApplyListResponseVo } from "./WebResultGetApplyListResponseVo";

 export type GetWishApplyQueryParams = {
    /**
     * @type string
    */
    wishId: string;
    /**
     * @type array | undefined
    */
    bizIds?: string[];
    /**
     * @default ""
     * @type string | undefined
    */
    nextToken?: string;
    /**
     * @default 10
     * @type integer | undefined, int32
    */
    limit?: number;
};
/**
 * @description Successful operation
*/
export type GetWishApply200 = WebResultGetApplyListResponseVo;
/**
 * @description Successful operation
*/
export type GetWishApplyQueryResponse = Omit<NonNullable<WebResultGetApplyListResponseVo>, "responseEnum">;
export type GetWishApplyQuery = {
    Response: GetWishApplyQueryResponse;
    QueryParams: GetWishApplyQueryParams;
};