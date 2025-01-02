import type { ConfigSearchResponseVo } from "./ConfigSearchResponseVo";

 export type ConfigSearchPathParams = {
    /**
     * @description config name
     * @type string
    */
    config_name: string;
};
export type ConfigSearchQueryParams = {
    /**
     * @description the config key
     * @type string | undefined
    */
    parameter_name?: string;
};
/**
 * @description Successful operation
*/
export type ConfigSearch200 = ConfigSearchResponseVo;
/**
 * @description Successful operation
*/
export type ConfigSearchQueryResponse = Omit<NonNullable<ConfigSearchResponseVo>, "responseEnum">;
export type ConfigSearchQuery = {
    Response: ConfigSearchQueryResponse;
    PathParams: ConfigSearchPathParams;
    QueryParams: ConfigSearchQueryParams;
};