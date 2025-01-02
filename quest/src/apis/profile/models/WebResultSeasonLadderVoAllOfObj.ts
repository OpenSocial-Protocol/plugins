import type { LadderVo } from "./LadderVo";

 export type WebResultSeasonLadderVoAllOfObj = {
    /**
     * @type object | undefined
    */
    myLadder?: LadderVo;
    /**
     * @type integer | undefined, int64
    */
    startTime?: number;
    /**
     * @type boolean | undefined
    */
    calculating?: boolean;
    /**
     * @type integer | undefined, int64
    */
    endTime?: number;
    /**
     * @type integer | undefined, int64
    */
    cycle?: number;
    /**
     * @description 排行榜数据
     * @type array | undefined
    */
    globalLadder?: LadderVo[];
};