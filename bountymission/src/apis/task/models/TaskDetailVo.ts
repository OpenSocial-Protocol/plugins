import type { TaskSubVo } from "./TaskSubVo";
import type { Award } from "./Award";

 export type TaskDetailVo = {
    /**
     * @type object | undefined
    */
    image?: {
        [key: string]: object;
    };
    /**
     * @type integer | undefined, int32
    */
    process?: number;
    /**
     * @type array | undefined
    */
    subTasks?: TaskSubVo[];
    /**
     * @type string | undefined
    */
    rewardType?: string;
    /**
     * @type string | undefined
    */
    title?: string;
    /**
     * @type string | undefined
    */
    platform?: string;
    /**
     * @type string | undefined
    */
    labelColor?: string;
    /**
     * @type integer | undefined, int32
    */
    rewardStatus?: number;
    /**
     * @type string | undefined
    */
    rewardWay?: string;
    /**
     * @type string | undefined
    */
    login_url?: string;
    /**
     * @type integer | undefined, int32
    */
    total?: number;
    /**
     * @type integer | undefined, int64
    */
    startTime?: number;
    /**
     * @type integer | undefined, int64
    */
    endTime?: number;
    /**
     * @type string | undefined
    */
    labelName?: string;
    /**
     * @type object | undefined
    */
    attr?: {
        [key: string]: object;
    };
    /**
     * @type string | undefined
    */
    taskId?: string;
    /**
     * @type array | undefined
    */
    rewards?: Award[];
    /**
     * @type string | undefined
    */
    desc?: string;
};