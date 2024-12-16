import type { WebResponse } from "./WebResponse";

 export type DetailPaymentTermsPathParams = {
    /**
     * @description 卡账号
     * @type string
    */
    id: string;
};
/**
 * @description Successful operation
*/
export type DetailPaymentTerms200 = WebResponse;
/**
 * @description Successful operation
*/
export type DetailPaymentTermsQueryResponse = WebResponse;
export type DetailPaymentTermsQuery = {
    Response: DetailPaymentTermsQueryResponse;
    PathParams: DetailPaymentTermsPathParams;
};