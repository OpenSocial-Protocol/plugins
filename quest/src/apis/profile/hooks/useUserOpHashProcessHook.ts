import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { UserOpHashProcessMutationRequest, UserOpHashProcessMutationResponse } from "../models/UserOpHashProcess";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UserOpHashProcessClient = typeof client<UserOpHashProcessMutationResponse, Error, UserOpHashProcessMutationRequest>;
type UserOpHashProcess = {
    data: UserOpHashProcessMutationResponse;
    error: Error;
    request: UserOpHashProcessMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UserOpHashProcessMutationResponse;
    client: {
        parameters: Partial<Parameters<UserOpHashProcessClient>[0]>;
        return: Awaited<ReturnType<UserOpHashProcessClient>>;
    };
};
/**
 * @description 前端监听到合约成功事件，调用加快后端事件处理
 * @summary /erc4337/userOpHashProcess
 * @link /v1/erc4337/userOpHash/process
 */
export function useUserOpHashProcessHook(options: {
    mutation?: UseMutationOptions<UserOpHashProcess["response"], UserOpHashProcess["error"], UserOpHashProcess["request"]>;
    client?: UserOpHashProcess["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UserOpHashProcess["data"], UserOpHashProcess["error"], UserOpHashProcess["request"]>({
                method: "post",
                url: `/v1/erc4337/userOpHash/process`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}