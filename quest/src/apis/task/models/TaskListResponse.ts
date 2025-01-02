import type { TaskSubVo } from "./TaskSubVo";

 export type TaskListResponse = {
    /**
     * @type string | undefined
    */
    code?: string;
    /**
     * @type array | undefined
    */
    subTask?: TaskSubVo[];
    /**
     * @description 是否显示进度条
     * @type boolean | undefined
    */
    showProgress?: boolean;
    /**
     * @type string | undefined
    */
    groupId?: string;
    /**
     * @type object | undefined
    */
    link?: {
        [key: string]: object;
    };
    /**
     * @type string | undefined
    */
    icon?: string;
    /**
     * @type string | undefined
    */
    title?: string;
    /**
     * @type string | undefined
    */
    cycle?: string;
    /**
     * @type string | undefined
    */
    postTaskCode?: string;
    /**
     * @type integer | undefined, int32
    */
    limit?: number;
    /**
     * @type string | undefined
    */
    labelName?: string;
    /**
     * @description 0:不显示 1:go 2:verify
     * @type integer | undefined, int32
    */
    btn?: number;
    /**
     * @type string | undefined
    */
    dataUrl?: string;
    /**
     * @type number | undefined
    */
    reward?: number;
    /**
     * @type object | undefined
    */
    image?: {
        [key: string]: object;
    };
    /**
     * @type string | undefined
    */
    connectUrl?: string;
    /**
     * @type integer | undefined, int64
    */
    completeTime?: number;
    /**
     * @type string | undefined
    */
    labelColor?: string;
    /**
     * @type string | undefined
    */
    url?: string;
    /**
     * @type string | undefined
    */
    postTaskDesc?: string;
    /**
     * @type integer | undefined, int32
    */
    postTaskStatus?: number;
    /**
     * @type string | undefined
    */
    domain?: string;
    /**
     * @type number | undefined
    */
    postTaskReward?: number;
    /**
     * @type integer | undefined, int32
    */
    progress?: number;
    /**
     * @type integer | undefined, int64
    */
    endTime?: number;
    /**
     * @type string | undefined
    */
    position?: string;
    /**
     * @type string | undefined
    */
    taskId?: string;
    /**
     * @type string | undefined
    */
    desc?: string;
    /**
     * @type integer | undefined, int32
    */
    status?: number;
};