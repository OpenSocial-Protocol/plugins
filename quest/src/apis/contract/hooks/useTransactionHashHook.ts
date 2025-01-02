import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { TransactionHashMutationRequest, TransactionHashMutationResponse } from "../models/TransactionHash";
import type { UseMutationOptions } from "@tanstack/react-query";

 type TransactionHashClient = typeof client<TransactionHashMutationResponse, Error, TransactionHashMutationRequest>;
type TransactionHash = {
    data: TransactionHashMutationResponse;
    error: Error;
    request: TransactionHashMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: TransactionHashMutationResponse;
    client: {
        parameters: Partial<Parameters<TransactionHashClient>[0]>;
        return: Awaited<ReturnType<TransactionHashClient>>;
    };
};
/**
 * @description 前端监听到合约成功事件，调用加快后端事件处理
 * @summary /basic/transactionHash/process
 * @link /v1/basic/txHash/process
 */
export function useTransactionHashHook(options: {
    mutation?: UseMutationOptions<TransactionHash["response"], TransactionHash["error"], TransactionHash["request"]>;
    client?: TransactionHash["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<TransactionHash["data"], TransactionHash["error"], TransactionHash["request"]>({
                method: "post",
                url: `/v1/basic/txHash/process`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}