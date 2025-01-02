import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { ModifyPaymentTermMutationRequest, ModifyPaymentTermMutationResponse, ModifyPaymentTermPathParams } from "../models/ModifyPaymentTerm";
import type { UseMutationOptions } from "@tanstack/react-query";

 type ModifyPaymentTermClient = typeof client<ModifyPaymentTermMutationResponse, Error, ModifyPaymentTermMutationRequest>;
type ModifyPaymentTerm = {
    data: ModifyPaymentTermMutationResponse;
    error: Error;
    request: ModifyPaymentTermMutationRequest;
    pathParams: ModifyPaymentTermPathParams;
    queryParams: never;
    headerParams: never;
    response: ModifyPaymentTermMutationResponse;
    client: {
        parameters: Partial<Parameters<ModifyPaymentTermClient>[0]>;
        return: Awaited<ReturnType<ModifyPaymentTermClient>>;
    };
};
/**
 * @description 修改卡
 * @summary 修改卡
 * @link /v1/customer/payment/terms/:id
 */
export function useModifyPaymentTermHook(id: ModifyPaymentTermPathParams["id"], options: {
    mutation?: UseMutationOptions<ModifyPaymentTerm["response"], ModifyPaymentTerm["error"], ModifyPaymentTerm["request"]>;
    client?: ModifyPaymentTerm["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<ModifyPaymentTerm["data"], ModifyPaymentTerm["error"], ModifyPaymentTerm["request"]>({
                method: "post",
                url: `/v1/customer/payment/terms/${id}`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}