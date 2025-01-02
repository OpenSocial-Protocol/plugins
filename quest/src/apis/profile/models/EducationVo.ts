export type EducationVo = {
    /**
     * @description 持续时间 1yr 1mo
     * @type string | undefined
    */
    duration?: string;
    /**
     * @description 专业
     * @type string | undefined
    */
    major?: string;
    /**
     * @description 学校名字
     * @type string | undefined
    */
    school?: string;
    /**
     * @description 学历 College/Bachelor/Master/PhD/Other
     * @type string | undefined
    */
    degree?: string;
    /**
     * @description 活动和社会
     * @type string | undefined
    */
    activities_and_societies?: string;
    /**
     * @description 开始时间 MM/YYYY
     * @type string | undefined
    */
    startsAt?: string;
    /**
     * @description 个人简介
     * @type string | undefined
    */
    description?: string;
    /**
     * @description 学校logo
     * @type string | undefined
    */
    logo?: string;
    /**
     * @description 唯一标识id 新增不用传
     * @type string | undefined
    */
    id?: string;
    /**
     * @description 结束时间 MM/YYYY
     * @type string | undefined
    */
    endsAt?: string;
};