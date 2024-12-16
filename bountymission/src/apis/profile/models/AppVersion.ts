/**
 * @description App Version
*/
export type AppVersion = {
    /**
     * @description Release Date
     * @type integer | undefined, int64
    */
    releaseTime?: number;
    /**
     * @description Release changes
     * @type array | undefined
    */
    changes?: string[];
    /**
     * @description Is force update or not
     * @type boolean | undefined
    */
    isForcedUpdate?: boolean;
    /**
     * @description Release version
     * @type string | undefined
    */
    version?: string;
};