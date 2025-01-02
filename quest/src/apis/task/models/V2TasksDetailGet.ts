import type { WebResultTaskDetailVo } from "./WebResultTaskDetailVo";

 export type V2TasksDetailGetQueryParams = {
    /**
     * @description 任务id
     * @type string | undefined
    */
    taskId?: string;
};
/**
 * @description 成功
*/
export type V2TasksDetailGet200 = WebResultTaskDetailVo;
/**
 * @description 成功
*/
export type V2TasksDetailGetQueryResponse = Omit<NonNullable<WebResultTaskDetailVo>, "responseEnum">;
export type V2TasksDetailGetQuery = {
    Response: V2TasksDetailGetQueryResponse;
    QueryParams: V2TasksDetailGetQueryParams;
};