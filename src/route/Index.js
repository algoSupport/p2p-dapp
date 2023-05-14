import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ProductContextProvider } from "../pages/pre-built/products/ProductContext";
import { UserContextProvider } from "../pages/user/UserContext";
import { RedirectAs404 } from "../utils/Utils";

import Homepage from "../pages/dashboard/Dashboard";
import Wallets from "../pages/wallets/Wallets";

import Faq from "../pages/others/Faq";
import Terms from "../pages/others/Terms";

import ProjectCardPage from "../pages/pre-built/projects/ProjectCard";
import ProjectListPage from "../pages/pre-built/projects/ProjectList";
import BuyPage from "../pages/marketplace/Buy";
import UserContactCardPage from "../pages/user/UserContactCard";
import UserDetailsPage from "../pages/user/UserDetailsRegular";
import UserListCompact from "../pages/marketplace/UserListCompact";
import UserProfileLayout from "../pages/user/Profile";
import PaymentHistory from "../pages/pre-built/order-invoice/PaymentHistory";
import ProductCard from "../pages/pre-built/products/ProductCard";
import ProductList from "../pages/pre-built/products/ProductList";
import ProductDetails from "../pages/pre-built/products/ProductDetails";
import PricingTable from "../pages/earn/Earn";

import AppMessages from "../pages/app/messages/Messages";
import Chat from "../pages/app/chat/ChatContainer";
import Inbox from "../pages/app/inbox/Inbox";
import SwapPage from "../pages/swap/Swap";
import SellPage from "../pages/marketplace/Sell";
import { useAccount } from "wagmi";
import CreateBuyOffer from "../pages/marketplace/Buy/CreateOffer";
import { OfferContextProvider } from "../pages/user/OfferContext";

function PrivateRoute({ children, ...rest }) {
  const { isConnected } = useAccount();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isConnected ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/`}
          render={() => <Homepage />}
        ></Route>
        {/*Dashboards*/}

        <PrivateRoute path={`${process.env.PUBLIC_URL}/dashboard`}>
          <Homepage />
        </PrivateRoute>
        <PrivateRoute path={`${process.env.PUBLIC_URL}/wallets`}>
          <Wallets />
        </PrivateRoute>

        {/*Pre-built Pages*/}
        <Route exact path={`${process.env.PUBLIC_URL}/project-card`} component={ProjectCardPage}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/swap`} component={SwapPage}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/project-list`} component={ProjectListPage}></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/marketplace/buy`}
          render={() => (
            <UserContextProvider>
              <BuyPage />
            </UserContextProvider>
          )}
        ></Route>

        <PrivateRoute path={`${process.env.PUBLIC_URL}/marketplace/create-offer`}>
          {" "}
          <UserContextProvider>
            <OfferContextProvider>
              <CreateBuyOffer />
            </OfferContextProvider>
          </UserContextProvider>
        </PrivateRoute>

        {/* <Route
          exact
          path={`${process.env.PUBLIC_URL}/marketplace/create-offer`}
          render={() => (
            <UserContextProvider>
              <OfferContextProvider>
                <CreateBuyOffer />
              </OfferContextProvider>
            </UserContextProvider>
          )}
        ></Route> */}

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/marketplace/sell`}
          render={() => (
            <UserContextProvider>
              <SellPage />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/marketplace/user-list-compact`}
          render={() => (
            <UserContextProvider>
              <UserListCompact />
            </UserContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/marketplace/user-details-regular/:id`}
          render={(props) => (
            <UserContextProvider>
              <UserDetailsPage {...props} />
            </UserContextProvider>
          )}
        ></Route>

        <PrivateRoute path={`${process.env.PUBLIC_URL}/profile/details`}>
          <UserProfileLayout />
        </PrivateRoute>
        <PrivateRoute path={`${process.env.PUBLIC_URL}/profile/notifications`}>
          <UserProfileLayout />
        </PrivateRoute>
        <PrivateRoute path={`${process.env.PUBLIC_URL}/profile/settings/`}>
          <UserProfileLayout />
        </PrivateRoute>
        <PrivateRoute path={`${process.env.PUBLIC_URL}/profile/banking/`}>
          <UserProfileLayout />
        </PrivateRoute>
        <Route //Context api added
          exact
          path={`${process.env.PUBLIC_URL}/user-contact-card`}
          render={() => (
            <UserContextProvider>
              <UserContactCardPage />
            </UserContextProvider>
          )}
        ></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/product-list`} component={ProductList}></Route>
        <Route // context api added
          exact
          path={`${process.env.PUBLIC_URL}/product-card`}
          render={(props) => (
            <ProductContextProvider>
              <ProductCard />
            </ProductContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/product-details/:id`}
          render={(props) => (
            <ProductContextProvider>
              <ProductDetails {...props} />
            </ProductContextProvider>
          )}
        ></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/transactions`} component={PaymentHistory}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/earn`} component={PricingTable}></Route>

        {/*Demo Pages*/}
        <Route exact path={`${process.env.PUBLIC_URL}/pages/terms-policy`} component={Terms}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/faq`} component={Faq}></Route>

        {/*Application*/}
        <Route exact path={`${process.env.PUBLIC_URL}/app-messages`} component={AppMessages}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/app-chat`} component={Chat}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/app-inbox`} component={Inbox}></Route>

        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  );
};
export default Pages;
