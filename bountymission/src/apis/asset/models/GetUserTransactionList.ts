import type { WebResultGetUserTransactionListResponseVo } from "./WebResultGetUserTransactionListResponseVo";

 export type GetUserTransactionListQueryParams = {
    /**
     * @default 10
     * @type integer | undefined, int32
    */
    limit?: number;
    /**
     * @default ""
     * @type string | undefined
    */
    nextToken?: string;
};
/**
 * @description Successful operation
*/
export type GetUserTransactionList200 = WebResultGetUserTransactionListResponseVo;
/**
 * @description Successful operation
*/
export type GetUserTransactionListQueryResponse = Omit<NonNullable<WebResultGetUserTransactionListResponseVo>, "responseEnum">;
export type GetUserTransactionListQuery = {
    Response: GetUserTransactionListQueryResponse;
    QueryParams: GetUserTransactionListQueryParams;
};