import type { WebResultChainConfig } from "./WebResultChainConfig";

 export type GetChainConfigQueryParams = {
    /**
     * @description chainId
     * @default 80084
     * @type integer | undefined, int32
    */
    chainId?: number;
};
/**
 * @description OK
*/
export type GetChainConfig200 = WebResultChainConfig;
/**
 * @description OK
*/
export type GetChainConfigQueryResponse = Omit<NonNullable<WebResultChainConfig>, "responseEnum">;
export type GetChainConfigQuery = {
    Response: GetChainConfigQueryResponse;
    QueryParams: GetChainConfigQueryParams;
};