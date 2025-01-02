import type { WebResultListSeasonConfigVo } from "./WebResultListSeasonConfigVo";

 /**
 * @description Successful operation
*/
export type ListSeasonConfig200 = WebResultListSeasonConfigVo;
/**
 * @description Successful operation
*/
export type ListSeasonConfigQueryResponse = Omit<NonNullable<WebResultListSeasonConfigVo>, "responseEnum">;
export type ListSeasonConfigQuery = {
    Response: ListSeasonConfigQueryResponse;
};