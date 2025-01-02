export type UserOperationVo = {
    /**
     * @description Address of paymaster sponsoring the transaction, followed by extra data to send to the paymaster (empty for self-sponsored transaction)
     * @type string | undefined
    */
    paymasterAndData?: string;
    /**
     * @description The amount of gas to allocate the main execution call
     * @type string | undefined
    */
    callGasLimit?: string;
    /**
     * @description The initCode of the account (needed if and only if the account is not yet on-chain and needs to be created)
     * @type string | undefined
    */
    initCode?: string;
    /**
     * @description Data passed into the account along with the nonce during the verification step
     * @type string | undefined
    */
    signature?: string;
    /**
     * @description The data to pass to the sender during the main execution call
     * @type string | undefined
    */
    callData?: string;
    /**
     * @description The amount of gas to allocate for the verification step
     * @type string | undefined
    */
    verificationGasLimit?: string;
    /**
     * @description block base fee per gas
     * @type string | undefined
    */
    baseFeePerGas?: string;
    /**
     * @description Anti-replay parameter (see “Semi-abstracted Nonce Support” )
     * @type string | undefined
    */
    nonce?: string;
    /**
     * @description The account making the operation
     * @type string | undefined
    */
    sender?: string;
    /**
     * @description maxPriorityFeePerGas without buffer
     * @type string | undefined
    */
    maxPriorityFeePerGasNoBuff?: string;
    /**
     * @description Maximum priority fee per gas (similar to EIP-1559 max_priority_fee_per_gas)
     * @type string | undefined
    */
    maxPriorityFeePerGas?: string;
    /**
     * @description Maximum fee per gas (similar to EIP-1559 max_fee_per_gas)
     * @type string | undefined
    */
    maxFeePerGas?: string;
    /**
     * @description The amount of gas to pay for to compensate the bundler for pre-verification execution, calldata and any gas overhead that can’t be tracked on-chain
     * @type string | undefined
    */
    preVerificationGas?: string;
    /**
     * @description maxFeePerGas without buffer
     * @type string | undefined
    */
    maxFeePerGasNoBuff?: string;
};