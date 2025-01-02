import type { WebResultCustomerVo } from "./WebResultCustomerVo";

 export type UnbindAuthQueryParams = {
    /**
     * @description 待解绑的钱包地址
     * @type string
    */
    address: string;
};
/**
 * @description Successful operation
*/
export type UnbindAuth200 = WebResultCustomerVo;
/**
 * @description Successful operation
*/
export type UnbindAuthMutationResponse = Omit<NonNullable<WebResultCustomerVo>, "responseEnum">;
export type UnbindAuthMutation = {
    Response: UnbindAuthMutationResponse;
    QueryParams: UnbindAuthQueryParams;
};