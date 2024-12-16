import type { NftConfigVo } from "./NftConfigVo";

 export type WebResultNftConfigResponseVoAllOfObj = {
    /**
     * @type integer | undefined, int64
    */
    currentTime?: number;
    /**
     * @description 开盲盒时间
     * @type integer | undefined, int64
    */
    openMysteryBoxTime?: number;
    /**
     * @type array | undefined
    */
    rows?: NftConfigVo[];
};