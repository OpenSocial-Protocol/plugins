import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { UserSkillUpsertMutationRequest, UserSkillUpsertMutationResponse } from "../models/UserSkillUpsert";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UserSkillUpsertClient = typeof client<UserSkillUpsertMutationResponse, Error, UserSkillUpsertMutationRequest>;
type UserSkillUpsert = {
    data: UserSkillUpsertMutationResponse;
    error: Error;
    request: UserSkillUpsertMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UserSkillUpsertMutationResponse;
    client: {
        parameters: Partial<Parameters<UserSkillUpsertClient>[0]>;
        return: Awaited<ReturnType<UserSkillUpsertClient>>;
    };
};
/**
 * @description 用户skill创建&更新
 * @summary 用户skill创建&更新
 * @link /v1/user/skill/upsert
 * @deprecated
 */
export function useUserSkillUpsertHook(options: {
    mutation?: UseMutationOptions<UserSkillUpsert["response"], UserSkillUpsert["error"], UserSkillUpsert["request"]>;
    client?: UserSkillUpsert["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UserSkillUpsert["data"], UserSkillUpsert["error"], UserSkillUpsert["request"]>({
                method: "post",
                url: `/v1/user/skill/upsert`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}