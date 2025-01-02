import type { WebResponse } from "./WebResponse";

 export type PostQueryParams = {
    /**
     * @description 搜索关键字
     * @type string
    */
    keyWord: string;
    /**
     * @description 语言区
     * @type string | undefined
    */
    zone?: string;
    /**
     * @description page
     * @type integer, int32
    */
    page: number;
    /**
     * @description limit
     * @type integer, int32
    */
    limit: number;
    /**
     * @description 搜索类型
     * @type integer, int32
    */
    searchType: number;
};
/**
 * @description Successful operation
*/
export type Post200 = WebResponse;
/**
 * @description Successful operation
*/
export type PostQueryResponse = WebResponse;
export type PostQuery = {
    Response: PostQueryResponse;
    QueryParams: PostQueryParams;
};