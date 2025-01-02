import type { WebResultGoAppResponse } from "./WebResultGoAppResponse";

 export type UserAccessQueryParams = {
    /**
     * @description 进入场景资格判断(ENTRANCE)
     * @type string
    */
    scene: string;
};
/**
 * @description Successful operation
*/
export type UserAccess200 = WebResultGoAppResponse;
/**
 * @description Successful operation
*/
export type UserAccessQueryResponse = Omit<NonNullable<WebResultGoAppResponse>, "responseEnum">;
export type UserAccessQuery = {
    Response: UserAccessQueryResponse;
    QueryParams: UserAccessQueryParams;
};