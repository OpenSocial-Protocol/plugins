import { OspStore, useStore } from "@app/pluginUi/stores";

/**@deprecated cannot use store in hooks
 *
 * @returns
 */
const useChainConfig = () => {
  const ospStore = useStore<OspStore>("ospStore");
  const { config } = ospStore.zeekClient;
  return config;
};

export default useChainConfig;
