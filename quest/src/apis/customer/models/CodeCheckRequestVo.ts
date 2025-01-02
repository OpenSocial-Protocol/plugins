export type CodeCheckRequestVo = {
    /**
     * @type string
    */
    code: string;
    /**
     * @description 场景，各系统自定义场景名称
     * @type array | undefined
    */
    scenes?: string[];
};