import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { Bind1MutationResponse, Bind1QueryParams, Bind1HeaderParams } from "../models/Bind1";
import type { UseMutationOptions } from "@tanstack/react-query";

 type Bind1Client = typeof client<Bind1MutationResponse, Error, never>;
type Bind1 = {
    data: Bind1MutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: Bind1QueryParams;
    headerParams: Bind1HeaderParams;
    response: Bind1MutationResponse;
    client: {
        parameters: Partial<Parameters<Bind1Client>[0]>;
        return: Awaited<ReturnType<Bind1Client>>;
    };
};
/**
 * @description IM用户绑定、打标签、个人资料更新
 * @summary IM用户绑定
 * @link /v1/customer/im/bind
 */
export function useBind1Hook(params: Bind1["queryParams"], headers: Bind1["headerParams"], options: {
    mutation?: UseMutationOptions<Bind1["response"], Bind1["error"], Bind1["request"]>;
    client?: Bind1["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<Bind1["data"], Bind1["error"], Bind1["request"]>({
                method: "post",
                url: `/v1/customer/im/bind`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}