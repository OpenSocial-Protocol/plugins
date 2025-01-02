import type { WebResultSeasonLadderVo } from "./WebResultSeasonLadderVo";

 export type GetCurrentSeasonLadderHistoryPathParams = {
    /**
     * @description cycleId
     * @type number
    */
    cycleId: number;
};
/**
 * @description Successful operation
*/
export type GetCurrentSeasonLadderHistory200 = WebResultSeasonLadderVo;
/**
 * @description Successful operation
*/
export type GetCurrentSeasonLadderHistoryQueryResponse = Omit<NonNullable<WebResultSeasonLadderVo>, "responseEnum">;
export type GetCurrentSeasonLadderHistoryQuery = {
    Response: GetCurrentSeasonLadderHistoryQueryResponse;
    PathParams: GetCurrentSeasonLadderHistoryPathParams;
};