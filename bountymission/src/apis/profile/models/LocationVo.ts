/**
 * @description **举例：** ```json      \"location\": {       \"address\": \"2712 Broadway St\",       \"postalCode\": \"CA 94115\",       \"city\": \"San Francisco\",       \"countryCode\": \"US\",       \"region\": \"California\"       } ```
*/
export type LocationVo = {
    /**
     * @description 地址
     * @type string | undefined
    */
    address?: string;
    /**
     * @description 城市
     * @type string | undefined
    */
    city?: string;
    /**
     * @description 国家编码
     * @type string | undefined
    */
    countryCode?: string;
    /**
     * @description 邮政编码
     * @type string | undefined
    */
    postalCode?: string;
    /**
     * @description 地区
     * @type string | undefined
    */
    region?: string;
};