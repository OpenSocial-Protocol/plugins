import type { WebResultVerifyVo } from "./WebResultVerifyVo";

 export type S2TasksVerifyGetQueryParams = {
    /**
     * @description 其他平台用户ID
     * @type string
    */
    cid: string;
    /**
     * @description 待验证的场景，目前只支持 follow_x
     * @type string
    */
    scene: string;
    /**
     * @description 其他额外参数，json格式
     * @type string | undefined
    */
    ext?: string;
};
export type S2TasksVerifyGetHeaderParams = {
    /**
     * @type string
    */
    Authorization: string;
    /**
     * @description saasId
     * @type string
    */
    saas_id: string;
};
/**
 * @description 成功
*/
export type S2TasksVerifyGet200 = WebResultVerifyVo;
/**
 * @description 成功
*/
export type S2TasksVerifyGetQueryResponse = Omit<NonNullable<WebResultVerifyVo>, "responseEnum">;
export type S2TasksVerifyGetQuery = {
    Response: S2TasksVerifyGetQueryResponse;
    QueryParams: S2TasksVerifyGetQueryParams;
    HeaderParams: S2TasksVerifyGetHeaderParams;
};