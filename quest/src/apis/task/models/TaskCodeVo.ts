import type { NodeVo } from "./NodeVo";

 export type TaskCodeVo = {
    /**
     * @type array | undefined
    */
    image?: string[];
    /**
     * @type integer | undefined, int32
    */
    process?: number;
    /**
     * @type boolean | undefined
    */
    checkIn?: boolean;
    /**
     * @type array | undefined
    */
    nodes?: NodeVo[];
    /**
     * @type string | undefined
    */
    title?: string;
    /**
     * @type string | undefined
    */
    taskId?: string;
    /**
     * @type string | undefined
    */
    desc?: string;
};