import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { AddExperienceMutationRequest, AddExperienceMutationResponse } from "../models/AddExperience";
import type { UseMutationOptions } from "@tanstack/react-query";

 type AddExperienceClient = typeof client<AddExperienceMutationResponse, Error, AddExperienceMutationRequest>;
type AddExperience = {
    data: AddExperienceMutationResponse;
    error: Error;
    request: AddExperienceMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: AddExperienceMutationResponse;
    client: {
        parameters: Partial<Parameters<AddExperienceClient>[0]>;
        return: Awaited<ReturnType<AddExperienceClient>>;
    };
};
/**
 * @description 增加用户工作经历
 * @summary 增加用户工作经历
 * @link /v1/user/experience
 * @deprecated
 */
export function useAddExperienceHook(options: {
    mutation?: UseMutationOptions<AddExperience["response"], AddExperience["error"], AddExperience["request"]>;
    client?: AddExperience["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<AddExperience["data"], AddExperience["error"], AddExperience["request"]>({
                method: "post",
                url: `/v1/user/experience`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}