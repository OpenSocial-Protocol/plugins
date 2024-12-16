import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { UpdateExperienceMutationRequest, UpdateExperienceMutationResponse } from "../models/UpdateExperience";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdateExperienceClient = typeof client<UpdateExperienceMutationResponse, Error, UpdateExperienceMutationRequest>;
type UpdateExperience = {
    data: UpdateExperienceMutationResponse;
    error: Error;
    request: UpdateExperienceMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UpdateExperienceMutationResponse;
    client: {
        parameters: Partial<Parameters<UpdateExperienceClient>[0]>;
        return: Awaited<ReturnType<UpdateExperienceClient>>;
    };
};
/**
 * @description 修改用户工作经历
 * @summary 修改用户工作经历
 * @link /v1/user/experience
 * @deprecated
 */
export function useUpdateExperienceHook(options: {
    mutation?: UseMutationOptions<UpdateExperience["response"], UpdateExperience["error"], UpdateExperience["request"]>;
    client?: UpdateExperience["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UpdateExperience["data"], UpdateExperience["error"], UpdateExperience["request"]>({
                method: "put",
                url: `/v1/user/experience`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}