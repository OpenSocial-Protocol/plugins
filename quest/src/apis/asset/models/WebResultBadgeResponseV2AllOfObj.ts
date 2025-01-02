import type { NftVo } from "./NftVo";

 export type WebResultBadgeResponseV2AllOfObj = {
    /**
     * @description badge total count
     * @type integer | undefined, int64
    */
    total?: number;
    /**
     * @type array | undefined
    */
    rows?: NftVo[];
};