import type { Award } from "./Award";

 export type CheckInStatusVo = {
    /**
     * @type integer | undefined, int32
    */
    checkInDays?: number;
    /**
     * @description true 已签到，false 未签到
     * @type boolean | undefined
    */
    checkIn?: boolean;
    /**
     * @type array | undefined
    */
    checkInReward?: Award[];
    /**
     * @type integer | undefined, int64
    */
    checkInTime?: number;
    /**
     * @type string | undefined
    */
    icon?: string;
    /**
     * @description 今日签到奖励
     * @type string | undefined
    */
    todayReward?: string;
    /**
     * @description 任务标题
     * @type string | undefined
    */
    title?: string;
    /**
     * @type string | undefined
    */
    desc?: string;
};