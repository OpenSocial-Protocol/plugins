export type OffchainProcessRequestVo = {
    /**
     * @description 链下数据id
     * @type string
    */
    offchainId: string;
    /**
     * @description 是否异步处理
     * @type boolean | undefined
    */
    isAsync?: boolean;
};