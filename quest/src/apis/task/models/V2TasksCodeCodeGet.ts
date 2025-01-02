import type { WebResultSeriesTaskVo } from "./WebResultSeriesTaskVo";

 export type V2TasksCodeCodeGetPathParams = {
    /**
     * @type string
    */
    code: string;
};
/**
 * @description 成功
*/
export type V2TasksCodeCodeGet200 = WebResultSeriesTaskVo;
/**
 * @description 成功
*/
export type V2TasksCodeCodeGetQueryResponse = Omit<NonNullable<WebResultSeriesTaskVo>, "responseEnum">;
export type V2TasksCodeCodeGetQuery = {
    Response: V2TasksCodeCodeGetQueryResponse;
    PathParams: V2TasksCodeCodeGetPathParams;
};