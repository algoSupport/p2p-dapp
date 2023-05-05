import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RedirectAs404 } from "./utils/Utils";

import Layout from "./layout/Index";

import Error404Classic from "./pages/error/404-classic";
import Error404Modern from "./pages/error/404-modern";
import Error504Modern from "./pages/error/504-modern";
import Error504Classic from "./pages/error/504-classic";

import Faq from "./pages/others/Faq";
import Terms from "./pages/others/Terms";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Success from "./pages/auth/Success";
import InvoicePrint from "./pages/pre-built/order-invoice/InvoicePrint";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrumGoerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import merge from "lodash.merge";

const { chains, provider } = configureChains(
  [arbitrumGoerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
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
              modalBackground: "#0f172a",
            },
          }
        )}
        coolMode
      >
        <Switch>
          {/* Auth Pages */}
          <Route exact path={`${process.env.PUBLIC_URL}/auth-success`} component={Success}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/auth-reset`} component={ForgotPassword}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/auth-register`} component={Register}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/auth-login`} component={Login}></Route>

          {/* Print Pages */}
          <Route exact path={`${process.env.PUBLIC_URL}/invoice-print/:id`} component={InvoicePrint}></Route>

          {/* Helper pages */}
          <Route exact path={`${process.env.PUBLIC_URL}/auths/terms`} component={Terms}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/auths/faq`} component={Faq}></Route>

          <Route exact path={`${process.env.PUBLIC_URL}/invoice-print`} component={InvoicePrint}></Route>

          {/*Error Pages*/}
          <Route exact path={`${process.env.PUBLIC_URL}/errors/404-classic`} component={Error404Classic}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/errors/504-modern`} component={Error504Modern}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/errors/404-modern`} component={Error404Modern}></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/errors/504-classic`} component={Error504Classic}></Route>

          {/*Main Routes*/}
          <Route exact path="" component={Layout}></Route>
          <Route component={RedirectAs404}></Route>
        </Switch>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
export default withRouter(App);
