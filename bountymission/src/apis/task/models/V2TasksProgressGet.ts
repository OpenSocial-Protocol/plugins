import type { WebResultTaskProgressVo } from "./WebResultTaskProgressVo";

 export type V2TasksProgressGetQueryParams = {
    /**
     * @description 任务id
     * @type string
    */
    taskId: string;
    /**
     * @description task or reward, 暂时只支持reward
     * @type string
    */
    type: string;
};
export type V2TasksProgressGetHeaderParams = {
    /**
     * @description saasId
     * @type string
    */
    saas_id: string;
};
/**
 * @description 成功
*/
export type V2TasksProgressGet200 = WebResultTaskProgressVo;
/**
 * @description 成功
*/
export type V2TasksProgressGetQueryResponse = Omit<NonNullable<WebResultTaskProgressVo>, "responseEnum">;
export type V2TasksProgressGetQuery = {
    Response: V2TasksProgressGetQueryResponse;
    QueryParams: V2TasksProgressGetQueryParams;
    HeaderParams: V2TasksProgressGetHeaderParams;
};