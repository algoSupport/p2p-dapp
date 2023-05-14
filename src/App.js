import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RedirectAs404 } from "./utils/Utils";

import Layout from "./layout/Index";

import Error404Classic from "./pages/error/404-modern";

import Faq from "./pages/others/Faq";
import Terms from "./pages/others/Terms";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrumGoerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import merge from "lodash.merge";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { chains, provider } = configureChains(
  [arbitrumGoerli],
  [alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Cilistia",
  // projectId: "YOUR_PROJECT_ID",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        chains={chains}
        theme={merge(
          darkTheme({
            accentColor: "#6576fe",
            accentColorForeground: "white",
            borderRadius: "small",
            fontStack: "rounded",
            overlayBlur: "small",
          }),
          {
            colors: {
              modalBackground: "#1a2234",
            },
          }
        )}
        coolMode
      >
        <Switch>
          {/* Helper pages */}
          <Route exact path={`${process.env.PUBLIC_URL}/auths/terms`} component={Terms}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/auths/faq`} component={Faq}></Route>
          {/*Error Pages*/}
          <Route exact path={`${process.env.PUBLIC_URL}/errors/404-modern`} component={Error404Classic}></Route>

          {/*Main Routes*/}
          <Route exact path="" component={Layout}></Route>
          <Route component={RedirectAs404}></Route>
        </Switch>
        <ToastContainer />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
export default withRouter(App);
