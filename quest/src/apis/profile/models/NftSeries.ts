import type { WebResultNftSeriesResponse } from "./WebResultNftSeriesResponse";

 export type NftSeriesPathParams = {
    /**
     * @description nft type, values(badge)
     * @type string
    */
    type: string;
};
/**
 * @description Successful operation
*/
export type NftSeries200 = WebResultNftSeriesResponse;
/**
 * @description Successful operation
*/
export type NftSeriesQueryResponse = Omit<NonNullable<WebResultNftSeriesResponse>, "responseEnum">;
export type NftSeriesQuery = {
    Response: NftSeriesQueryResponse;
    PathParams: NftSeriesPathParams;
};