import type { WebResultSeasonLadderVo } from "./WebResultSeasonLadderVo";

 /**
 * @description Successful operation
*/
export type GetCurrentSeasonLadder200 = WebResultSeasonLadderVo;
/**
 * @description Successful operation
*/
export type GetCurrentSeasonLadderQueryResponse = Omit<NonNullable<WebResultSeasonLadderVo>, "responseEnum">;
export type GetCurrentSeasonLadderQuery = {
    Response: GetCurrentSeasonLadderQueryResponse;
};