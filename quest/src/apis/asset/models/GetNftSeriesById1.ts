import type { WebResultNftSeriesDetailResponse } from "./WebResultNftSeriesDetailResponse";

 export type GetNftSeriesById1PathParams = {
    /**
     * @description nft type, values(badge)
     * @type string
    */
    type: string;
    /**
     * @description nft contract address
     * @type string
    */
    address: string;
};
export type GetNftSeriesById1QueryParams = {
    /**
     * @description 用户id
     * @type string | undefined
    */
    customerId?: string;
};
/**
 * @description Successful operation
*/
export type GetNftSeriesById1200 = WebResultNftSeriesDetailResponse;
/**
 * @description Successful operation
*/
export type GetNftSeriesById1QueryResponse = Omit<NonNullable<WebResultNftSeriesDetailResponse>, "responseEnum">;
export type GetNftSeriesById1Query = {
    Response: GetNftSeriesById1QueryResponse;
    PathParams: GetNftSeriesById1PathParams;
    QueryParams: GetNftSeriesById1QueryParams;
};