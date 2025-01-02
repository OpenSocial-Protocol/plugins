import type { PriceResponse } from "./PriceResponse";

 export type GetPriceQueryParams = {
    /**
     * @description symbol
     * @type string
    */
    symbol: string;
    /**
     * @description quote
     * @type string | undefined
    */
    "quote, default: USD"?: string;
};
/**
 * @description OK
*/
export type GetPrice200 = PriceResponse;
/**
 * @description OK
*/
export type GetPriceQueryResponse = Omit<NonNullable<PriceResponse>, "responseEnum">;
export type GetPriceQuery = {
    Response: GetPriceQueryResponse;
    QueryParams: GetPriceQueryParams;
};