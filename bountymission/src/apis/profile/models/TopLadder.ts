import type { WebResultTopLadderVo } from "./WebResultTopLadderVo";

 export type TopLadderQueryParams = {
    /**
     * @description 取排行榜前多少名, 默认前100
     * @type integer | undefined, int32
    */
    limit?: number;
    /**
     * @description 排序策略，fold：相同分数排名相同， unfold：相同分数排名不同, 默认 unfold
     * @type string | undefined
    */
    strategy?: string;
};
export type TopLadderHeaderParams = {
    /**
     * @description 系统saas_id
     * @type string
    */
    saas_id: string;
    /**
     * @description ladder_saas_id 为 quests 系统对应的 saasId，查询 app 积分排行榜传 zeek-app
     * @type string | undefined
    */
    ladder_saas_id?: string;
};
/**
 * @description Successful operation
*/
export type TopLadder200 = WebResultTopLadderVo;
/**
 * @description Successful operation
*/
export type TopLadderQueryResponse = Omit<NonNullable<WebResultTopLadderVo>, "responseEnum">;
export type TopLadderQuery = {
    Response: TopLadderQueryResponse;
    QueryParams: TopLadderQueryParams;
    HeaderParams: TopLadderHeaderParams;
};