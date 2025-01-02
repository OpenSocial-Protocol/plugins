import type { WebResultTaskVo } from "./WebResultTaskVo";

 export type V2TasksListGetQueryParams = {
    /**
     * @description channel
     * @default "app"
     * @type string | undefined
    */
    channel?: string;
    /**
     * @description home
     * @type string | undefined
    */
    position?: string;
    /**
     * @description ios/android
     * @type string | undefined
    */
    clientType?: string;
    /**
     * @description app version
     * @type string | undefined
    */
    appVersion?: string;
};
export type V2TasksListGetHeaderParams = {
    /**
     * @description saas_id
     * @type string | undefined
    */
    saas_id?: string;
};
/**
 * @description Successful operation
*/
export type V2TasksListGet200 = WebResultTaskVo;
/**
 * @description Successful operation
*/
export type V2TasksListGetQueryResponse = Omit<NonNullable<WebResultTaskVo>, "responseEnum">;
export type V2TasksListGetQuery = {
    Response: V2TasksListGetQueryResponse;
    QueryParams: V2TasksListGetQueryParams;
    HeaderParams: V2TasksListGetHeaderParams;
};