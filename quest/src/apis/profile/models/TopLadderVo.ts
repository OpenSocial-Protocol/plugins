import type { LadderVo } from "./LadderVo";

 export type TopLadderVo = {
    /**
     * @type object | undefined
    */
    myLadder?: LadderVo;
    /**
     * @description 排行榜信息
     * @type array | undefined
    */
    ladders?: LadderVo[];
};