import type { SeasonLevelConfigVo } from "./SeasonLevelConfigVo";

 export type SeasonConfigVo = {
    /**
     * @type string | undefined
    */
    name?: string;
    /**
     * @type array | undefined
    */
    levelConfig?: SeasonLevelConfigVo[];
    /**
     * @description season id
     * @type integer | undefined, int64
    */
    id?: number;
    /**
     * @description season begin time
     * @type integer | undefined, int64
    */
    beginTime?: number;
    /**
     * @description season end time
     * @type integer | undefined, int64
    */
    endTime?: number;
};