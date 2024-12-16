import type { WebResultGetWalletTransactionResponseVo } from "./WebResultGetWalletTransactionResponseVo";

 export type GetWalletTransactionQueryParams = {
    /**
     * @description limit
     * @default 10
     * @type integer, int32
    */
    limit: number;
    /**
     * @description nextToken
     * @default ""
     * @type string | undefined
    */
    nextToken?: string;
    /**
     * @description token
     * @default ""
     * @type string | undefined
    */
    token?: string;
};
/**
 * @description OK
*/
export type GetWalletTransaction200 = WebResultGetWalletTransactionResponseVo;
/**
 * @description OK
*/
export type GetWalletTransactionQueryResponse = Omit<NonNullable<WebResultGetWalletTransactionResponseVo>, "responseEnum">;
export type GetWalletTransactionQuery = {
    Response: GetWalletTransactionQueryResponse;
    QueryParams: GetWalletTransactionQueryParams;
};