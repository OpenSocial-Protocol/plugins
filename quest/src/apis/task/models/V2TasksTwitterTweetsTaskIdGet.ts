import type { WebResultTaskTweetVo } from "./WebResultTaskTweetVo";

 export type V2TasksTwitterTweetsTaskIdGetPathParams = {
    /**
     * @description taskId
     * @type string
    */
    taskId: string;
};
export type V2TasksTwitterTweetsTaskIdGetHeaderParams = {
    /**
     * @description saasId
     * @type string
    */
    saas_id: string;
};
/**
 * @description 成功
*/
export type V2TasksTwitterTweetsTaskIdGet200 = WebResultTaskTweetVo;
/**
 * @description 成功
*/
export type V2TasksTwitterTweetsTaskIdGetQueryResponse = Omit<NonNullable<WebResultTaskTweetVo>, "responseEnum">;
export type V2TasksTwitterTweetsTaskIdGetQuery = {
    Response: V2TasksTwitterTweetsTaskIdGetQueryResponse;
    PathParams: V2TasksTwitterTweetsTaskIdGetPathParams;
    HeaderParams: V2TasksTwitterTweetsTaskIdGetHeaderParams;
};