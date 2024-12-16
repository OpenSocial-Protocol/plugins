export type CodeUseVo = {
    /**
     * @description 兑换码
     * @type string | undefined
    */
    code?: string;
    /**
     * @description 场景，各系统自定义场景名称
     * @type array | undefined
    */
    scenes?: string[];
    /**
     * @description 使用方来源, WEB, APP, 默认WEB
     * @type string | undefined
    */
    source?: string;
};