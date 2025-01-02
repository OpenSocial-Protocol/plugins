import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { DeleteEducationMutationResponse, DeleteEducationQueryParams } from "../models/DeleteEducation";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteEducationClient = typeof client<DeleteEducationMutationResponse, Error, never>;
type DeleteEducation = {
    data: DeleteEducationMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: DeleteEducationQueryParams;
    headerParams: never;
    response: DeleteEducationMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteEducationClient>[0]>;
        return: Awaited<ReturnType<DeleteEducationClient>>;
    };
};
/**
 * @description 删除用户教育经历
 * @summary 删除用户教育经历
 * @link /v1/user/education
 * @deprecated
 */
export function useDeleteEducationHook(params?: DeleteEducation["queryParams"], options: {
    mutation?: UseMutationOptions<DeleteEducation["response"], DeleteEducation["error"], DeleteEducation["request"]>;
    client?: DeleteEducation["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteEducation["data"], DeleteEducation["error"], DeleteEducation["request"]>({
                method: "delete",
                url: `/v1/user/education`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}