import type { WebResultNftSeriesDetailResponse } from "./WebResultNftSeriesDetailResponse";

 export type GetNftSeriesByIdPathParams = {
    /**
     * @description nft type, values(badge)
     * @type string
    */
    type: string;
    /**
     * @description nft series
     * @type string
    */
    series: string;
};
export type GetNftSeriesByIdQueryParams = {
    /**
     * @description 用户id
     * @type string | undefined
    */
    customerId?: string;
};
/**
 * @description Successful operation
*/
export type GetNftSeriesById200 = WebResultNftSeriesDetailResponse;
/**
 * @description Successful operation
*/
export type GetNftSeriesByIdQueryResponse = Omit<NonNullable<WebResultNftSeriesDetailResponse>, "responseEnum">;
export type GetNftSeriesByIdQuery = {
    Response: GetNftSeriesByIdQueryResponse;
    PathParams: GetNftSeriesByIdPathParams;
    QueryParams: GetNftSeriesByIdQueryParams;
};