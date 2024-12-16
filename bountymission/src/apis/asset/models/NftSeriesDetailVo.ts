import type { NftVo } from "./NftVo";

 export type NftSeriesDetailVo = {
    /**
     * @type string | undefined
    */
    ext?: string;
    /**
     * @description all nfts in series
     * @type array | undefined
    */
    nfts?: NftVo[];
    /**
     * @description series name
     * @type string | undefined
    */
    name?: string;
    /**
     * @description series gateway logo
     * @type string | undefined
    */
    logo?: string;
    /**
     * @description series detail
     * @type string | undefined
    */
    detail?: string;
    /**
     * @description series type, unique key
     * @type string | undefined
    */
    type?: string;
    /**
     * @description series group
     * @type string | undefined
    */
    group?: string;
    /**
     * @description series desc
     * @type string | undefined
    */
    desc?: string;
};