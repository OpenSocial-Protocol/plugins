export type NftVo = {
    /**
     * @description show new tag
     * @type boolean | undefined
    */
    newTag?: boolean;
    /**
     * @description nft complete process
     * @type number | undefined
    */
    process?: number;
    /**
     * @description reward rizz points
     * @type integer | undefined, int32
    */
    rizz?: number;
    /**
     * @description nft contract address
     * @type string | undefined
    */
    address?: string;
    /**
     * @description nft series name
     * @type string | undefined
    */
    seriesName?: string;
    /**
     * @description claimable id
     * @type string | undefined
    */
    claimableId?: string;
    /**
     * @description nft type
     * @type string | undefined
    */
    type?: string;
    /**
     * @description nft condition max
     * @type number | undefined
    */
    maxCond?: number;
    /**
     * @description nft claimed time
     * @type integer | undefined, int64
    */
    claimTime?: number;
    /**
     * @description nft tier
     * @type integer | undefined, int32
    */
    tier?: number;
    /**
     * @description nft series type
     * @type string | undefined
    */
    series?: string;
    /**
     * @description nft condition min
     * @type number | undefined
    */
    minCond?: number;
    /**
     * @description nft gateway logo
     * @type string | undefined
    */
    logo?: string;
    /**
     * @description nft desc
     * @type string | undefined
    */
    desc?: string;
    /**
     * @description nft status(pending、claimable、claimed)
     * @type string | undefined
    */
    status?: string;
};