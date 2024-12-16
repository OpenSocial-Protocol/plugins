export type SelfIntroductionVo = {
    /**
     * @description 自我介绍问题
     * @type string | undefined
    */
    question?: string;
    /**
     * @description 自我介绍答案
     * @type string | undefined
    */
    answer?: string;
    /**
     * @description 排序字段
     * @type integer | undefined, int32
    */
    sort?: number;
};