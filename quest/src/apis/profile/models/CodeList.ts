import type { WebResultGetCodesResponseVo } from "./WebResultGetCodesResponseVo";

 export type CodeListQueryParams = {
    /**
     * @description 分页大小
     * @type integer, int32
    */
    limit: number;
    /**
     * @description offset
     * @type integer, int32
    */
    offset: number;
    /**
     * @description 兑换码类型(DEFAULT_INVITE, SINGLE_USE, INTERVAL_LIMIT)
     * @type array | undefined
    */
    types?: string[];
    /**
     * @description 场景类型(MINT_GENESIS_NFT, MINT_OG_NFT)
     * @type array | undefined
    */
    scenes?: string[];
};
/**
 * @description Successful operation
*/
export type CodeList200 = WebResultGetCodesResponseVo;
/**
 * @description Successful operation
*/
export type CodeListQueryResponse = Omit<NonNullable<WebResultGetCodesResponseVo>, "responseEnum">;
export type CodeListQuery = {
    Response: CodeListQueryResponse;
    QueryParams: CodeListQueryParams;
};