import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { DeleteExperienceMutationResponse, DeleteExperienceQueryParams } from "../models/DeleteExperience";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteExperienceClient = typeof client<DeleteExperienceMutationResponse, Error, never>;
type DeleteExperience = {
    data: DeleteExperienceMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: DeleteExperienceQueryParams;
    headerParams: never;
    response: DeleteExperienceMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteExperienceClient>[0]>;
        return: Awaited<ReturnType<DeleteExperienceClient>>;
    };
};
/**
 * @description 删除用户工作经历
 * @summary 删除用户工作经历
 * @link /v1/user/experience
 * @deprecated
 */
export function useDeleteExperienceHook(params?: DeleteExperience["queryParams"], options: {
    mutation?: UseMutationOptions<DeleteExperience["response"], DeleteExperience["error"], DeleteExperience["request"]>;
    client?: DeleteExperience["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteExperience["data"], DeleteExperience["error"], DeleteExperience["request"]>({
                method: "delete",
                url: `/v1/user/experience`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}