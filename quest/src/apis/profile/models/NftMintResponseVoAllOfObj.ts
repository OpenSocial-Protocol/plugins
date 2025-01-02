import type { NftMintCheckResultItemVo } from "./NftMintCheckResultItemVo";
import type { MintRequestVo } from "./MintRequestVo";

 export type NftMintResponseVoAllOfObj = {
    /**
     * @type array | undefined
    */
    mismatchConditions?: NftMintCheckResultItemVo[];
    /**
     * @type array | undefined
    */
    matchConditions?: NftMintCheckResultItemVo[];
    /**
     * @type array | undefined
    */
    rows?: MintRequestVo[];
};