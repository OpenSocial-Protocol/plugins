import type { NftVo } from "./NftVo";

 export type ProfileVoBadges = {
    /**
     * @type integer | undefined, int64
    */
    total?: number;
    /**
     * @type array | undefined
    */
    rows?: NftVo[];
};