import "./style.css";
import "./drawing-board.js";

import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createMemoryRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ModalView, PopupView } from "./pluginUi/utils";
// import { QuestDetail } from "./pluginUi/pages/detail";
import {
  OspClientIniter,
  PluginIniter,
  TUIMsgEnum,
} from "./pluginUi/component/Init";
import { OspStore, useStore } from "./pluginUi/stores";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QuestCreate, QuestPreview } from "./pluginUi/pages/quest";
import React, { useEffect, useMemo, useState } from "react";

import Action from "./pluginUi/pages/action";
import Canvas from "./pluginUi/pages/canvas";
import Create from "./pluginUi/pages/create";
import KeepAlive from "./pluginUi/component/KeepAlive";
import MintNft from "./pluginUi/pages/mintNft";
import NftDetail from "./pluginUi/pages/nftDetail";
import { NotFound } from "./pluginUi/pages/notFound";
import Preview from "./pluginUi/pages/preview";
import { QuestDetail } from "./pluginUi/pages/questDetail";
import ReactDOM from "react-dom/client";
import { Spin } from "antd";
import { TPluginUrlParams } from "@open-social-protocol/osp-plugin-api-types";
import dayjs from "dayjs";
import qs from "qs";
import utc from "dayjs/plugin/utc";
import { JsPluginUIEventEmitInstance } from "./pluginUi/utils/common/JsSdkEventEmit";

dayjs.extend(utc);

const UI = () => {
  onmessage = async (event: MessageEvent) => {
    const pluginMessage = event.data;
    console.log("pluginMessage", pluginMessage);
    if (pluginMessage.type === TUIMsgEnum.Refund) {
      JsPluginUIEventEmitInstance.emitEvent(pluginMessage.type, {});
    } else {
      console.log("unknown pluginMessage");
    }
  };

  const pluginParams = useMemo(() => {
    const params = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });
    return params as TPluginUrlParams;
    // deps不要写 window.location.search
  }, []);

  const initData = {
    aaAddr: pluginParams?.ospInfo?.userInfo?.address,
    env: pluginParams?.ospInfo?.env,
    accessToken: pluginParams?.ospInfo?.accessToken,
    appId: pluginParams?.ospInfo?.appId,
    chainId: pluginParams?.ospInfo?.chainId,
    eoaAddr: pluginParams?.ospInfo?.eoaAddress,
  };

  const defaultRouter = {
    create: "/quest",
    detail: "/questDetail",
    popview: "/questDetail",
  }[pluginParams.type];

  const browserRouters = useMemo(() => {
    return createMemoryRouter(
      createRoutesFromElements(
        <Route
          element={
            <KeepAlive
              pluginParams={pluginParams}
              defaultRouter={defaultRouter}
            />
          }
        >
          <Route path="/create" element={<Create />} />
          <Route path="/action" element={<Action />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/mintNft" element={<MintNft />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/nftDetail" element={<NftDetail />} />
          <Route path="/quest" element={<QuestCreate />} />
          <Route path="/questPreview" element={<QuestPreview />} />
          <Route
            path="/questDetail"
            element={
              <QuestDetail
                profileId={pluginParams.ospInfo.userInfo.profileId}
                referencedProfileId={pluginParams?.ospInfo?.feedInfo?.profileId}
                referencedContentId={pluginParams?.ospInfo?.feedInfo?.contentId}
                communityId={pluginParams?.ospInfo?.tribeInfo?.id}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      )
    );
  }, [
    pluginParams,
    pluginParams?.ospInfo?.feedInfo?.contentId,
    pluginParams?.ospInfo?.tribeInfo?.id,
    pluginParams?.ospInfo?.feedInfo?.profileId,
    defaultRouter,
  ]);

  return (
    <PluginIniter>
      <OspClientIniter {...initData}>
        <QueryClientProvider client={new QueryClient()}>
          {/* <BrowserRouter>
            <Routes>

            </Routes>
          </BrowserRouter> */}
          <RouterProvider router={browserRouters} />
        </QueryClientProvider>
        <ModalView />
        <PopupView />
      </OspClientIniter>
    </PluginIniter>
  );
};

ReactDOM.createRoot(document.getElementById("react-page")).render(<UI />);
