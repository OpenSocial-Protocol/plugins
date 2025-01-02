import type { NftMintCheckResultItemVo } from "./NftMintCheckResultItemVo";

 export type WebResultNftMintCheckResponseVoAllOfObj = {
    /**
     * @type array | undefined
    */
    mismatchConditions?: NftMintCheckResultItemVo[];
    /**
     * @type array | undefined
    */
    matchConditions?: NftMintCheckResultItemVo[];
};