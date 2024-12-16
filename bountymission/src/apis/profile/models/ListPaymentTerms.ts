import type { WebResponse } from "./WebResponse";

 export type ListPaymentTermsQueryParams = {
    /**
     * @description 卡用途 1-circle
     * @type integer, int32
    */
    usage: number;
    /**
     * @description 分页offset
     * @default 0
     * @type integer, int32
    */
    offset: number;
    /**
     * @description 分页limit
     * @default 10
     * @type integer, int32
    */
    limit: number;
};
/**
 * @description Successful operation
*/
export type ListPaymentTerms200 = WebResponse;
/**
 * @description Successful operation
*/
export type ListPaymentTermsQueryResponse = WebResponse;
export type ListPaymentTermsQuery = {
    Response: ListPaymentTermsQueryResponse;
    QueryParams: ListPaymentTermsQueryParams;
};