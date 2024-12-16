import { useQuestDetailHook } from "@app/apis/quest";
import { useState } from "react";

// import {useQuery} from '@tanstack/react-query';
export const useQuestDetail = (bizId: string) => {
  const [loading, setLoading] = useState(true);
  /**
   * 调用zeek 后端接口的时候，header 中送 “id_token” = osp登陆后的 idtoken
   * 和 “public_key” = web3auth的eoa address
   * 1、调用后端 detail 接口，等接口返回
   * 2、我去查链上，根据 aa 查链上信息，没有==> 我就去创建链上用户 zeekclient.createProfile，完了之后调用 加速接口 (要依赖 success)
   * 3、这个时候有用户了，可以交互了,go 和  verify
   *
   */
  const { data } = useQuestDetailHook(bizId, {
    biz_id: bizId,
  });
};
