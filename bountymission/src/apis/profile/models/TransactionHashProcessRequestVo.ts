export type TransactionHashProcessRequestVo = {
    /**
     * @type integer, int64
    */
    chainId: number;
    /**
     * @description 合约调用成功后返回的：transactionHash
     * @type string
    */
    transactionHash: string;
};