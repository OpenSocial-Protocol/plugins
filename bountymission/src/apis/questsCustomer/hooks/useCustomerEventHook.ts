import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { CustomerEventMutationResponse, CustomerEventQueryParams, CustomerEventHeaderParams } from "../models/CustomerEvent";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CustomerEventClient = typeof client<CustomerEventMutationResponse, Error, never>;
type CustomerEvent = {
    data: CustomerEventMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: CustomerEventQueryParams;
    headerParams: CustomerEventHeaderParams;
    response: CustomerEventMutationResponse;
    client: {
        parameters: Partial<Parameters<CustomerEventClient>[0]>;
        return: Awaited<ReturnType<CustomerEventClient>>;
    };
};
/**
 * @summary 第三方用户注册或绑定邀请关系
 * @link /s2/customer/event
 */
export function useCustomerEventHook(params: CustomerEvent["queryParams"], headers: CustomerEvent["headerParams"], options: {
    mutation?: UseMutationOptions<CustomerEvent["response"], CustomerEvent["error"], CustomerEvent["request"]>;
    client?: CustomerEvent["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<CustomerEvent["data"], CustomerEvent["error"], CustomerEvent["request"]>({
                method: "post",
                url: `/s2/customer/event`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}