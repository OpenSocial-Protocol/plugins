import type { CustomerCodeUserListVoRowsInner } from "./CustomerCodeUserListVoRowsInner";

 export type CustomerCodeUserListVo = {
    /**
     * @description 下一页标识
     * @type string | undefined
    */
    nextToken?: string;
    /**
     * @description 总条数
     * @type integer | undefined, int64
    */
    totalCount?: number;
    /**
     * @type array | undefined
    */
    rows?: CustomerCodeUserListVoRowsInner[];
};