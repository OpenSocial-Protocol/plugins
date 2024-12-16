import type { WebResultBadgeResponseV2 } from "./WebResultBadgeResponseV2";

 export type BadgeAssetsQueryParams = {
    /**
     * @description customer id
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description nft status, values(claimable、claimed)
     * @type string | undefined
    */
    status?: string;
    /**
     * @description 返回数据的策略(all：返回所有徽章, max：仅返回同系列等级最高的徽章)
     * @type string | undefined
    */
    strategy?: string;
};
/**
 * @description Successful operation
*/
export type BadgeAssets200 = WebResultBadgeResponseV2;
/**
 * @description Successful operation
*/
export type BadgeAssetsQueryResponse = Omit<NonNullable<WebResultBadgeResponseV2>, "responseEnum">;
export type BadgeAssetsQuery = {
    Response: BadgeAssetsQueryResponse;
    QueryParams: BadgeAssetsQueryParams;
};