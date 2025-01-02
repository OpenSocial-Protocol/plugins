import { useCallback } from "react";
import { ContractAction } from "../utils/constance/contractAction";

function usePostMessage() {
  const postMessage = useCallback((action: ContractAction, payload: any) => {
    window.parent.postMessage(
      {
        action: action,
        payload: payload,
      },
      "*"
    );
  }, []);
  return postMessage;
}
export default usePostMessage;
