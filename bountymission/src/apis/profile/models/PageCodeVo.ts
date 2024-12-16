import type { CodesVo } from "./CodesVo";

 /**
 * @description 邀请返佣奖励
*/
export type PageCodeVo = {
    /**
     * @type integer | undefined, int32
    */
    offset?: number;
    /**
     * @type integer | undefined, int32
    */
    limit?: number;
    /**
     * @type integer | undefined, int32
    */
    totalCount?: number;
    /**
     * @type array | undefined
    */
    rows?: CodesVo[];
};