import type { QuestDetailResponseVo } from "./QuestDetailResponseVo";

 export type QuestDetailPathParams = {
    /**
     * @description Quest Id
     * @type string
    */
    id: string;
};
export type QuestDetailQueryParams = {
    /**
     * @description biz id
     * @type string | undefined
    */
    biz_id?: string;
};
/**
 * @description Successful operation
*/
export type QuestDetail200 = QuestDetailResponseVo;
/**
 * @description Successful operation
*/
export type QuestDetailQueryResponse = Omit<NonNullable<QuestDetailResponseVo>, "responseEnum">;
export type QuestDetailQuery = {
    Response: QuestDetailQueryResponse;
    PathParams: QuestDetailPathParams;
    QueryParams: QuestDetailQueryParams;
};