import type { QuestListResponseVo } from "./QuestListResponseVo";

 export type QuestListQueryParams = {
    /**
     * @description Osp Biz Id
     * @type array
    */
    bizIds: string[];
};
/**
 * @description Successful operation
*/
export type QuestList200 = QuestListResponseVo;
/**
 * @description Successful operation
*/
export type QuestListQueryResponse = Omit<NonNullable<QuestListResponseVo>, "responseEnum">;
export type QuestListQuery = {
    Response: QuestListQueryResponse;
    QueryParams: QuestListQueryParams;
};