export type NftSeriesVo = {
    /**
     * @description nft type
     * @type string | undefined
    */
    nftType?: string;
    /**
     * @type string | undefined
    */
    ext?: string;
    /**
     * @description nft address, unique key
     * @type string | undefined
    */
    address?: string;
    /**
     * @description series type
     * @type string | undefined
    */
    series?: string;
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
     * @description total rizz group by type
     * @type integer | undefined, int32
    */
    rizzTotal?: number;
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