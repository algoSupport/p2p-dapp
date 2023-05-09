import React, { useState } from "react";
import classNames from "classnames";
import Logo from "../logo/Logo";
import User from "./dropdown/user/User";
import Notification from "./dropdown/notification/Notification";
import Messages from "./dropdown/messages/Messages";
import Toggle from "../sidebar/Toggle";
import { Link } from "react-router-dom";
import { useAccount, useNetwork } from "wagmi";
import ConnectWalletButton from "../../components/button/ConnectWalletButton";

const Header = ({ fixed, theme, className, sidebarToggle, setVisibility, ...props }) => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const [onHover, setOnHover] = useState(false);
  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed": fixed,
    [`is-light`]: theme === "white",
    [`is-${theme}`]: theme !== "white" && theme !== "light",
    [`${className}`]: className,
  });

  let currentUrl;

  if (window.location.pathname !== undefined) {
    currentUrl = window.location.pathname;
  } else {
    currentUrl = null;
  }

  const onMouseEnter = () => {
    setOnHover(true);
  };
  const onMouseLeave = () => {
    setOnHover(false);
  };

  return (
    <div className={headerClass}>
      <div className="container-lg wide-xl">
        <div className="nk-header-wrap">
          <div className="nk-header-brand">
            <Logo />
          </div>
          <div className="nk-header-menu">
            <ul className="nk-menu nk-menu-main">
              <li
                className={`nk-menu-item has-sub ${
                  currentUrl.includes(process.env.PUBLIC_URL + "/marketplace") ? "active" : ""
                }`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <a href="#toggle" onClick={(ev) => ev.preventDefault()} className="nk-menu-link">
                  <span className="nk-menu-text">Marketplace</span>
                </a>
                {onHover && (
                  <ul className="nk-menu-sub">
                    <li className="nk-menu-item">
                      <Link
                        to={`${process.env.PUBLIC_URL}/marketplace/buy`}
                        onClick={() => setOnHover(false)}
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-text">Buy</span>
                      </Link>
                    </li>
                    <li className="nk-menu-item">
                      <Link
                        to={`${process.env.PUBLIC_URL}/marketplace/sell`}
                        onClick={() => setOnHover(false)}
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-text">Sell</span>
                      </Link>
                    </li>
                    <li className="nk-menu-item">
                      <Link
                        to={`${process.env.PUBLIC_URL}/marketplace/create-offer`}
                        onClick={() => setOnHover(false)}
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-text">Create</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className={`nk-menu-item has-sub`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <a href="#toggle" onClick={(ev) => ev.preventDefault()} className="nk-menu-link">
                  <span className="nk-menu-text">More</span>
                </a>
                {onHover && (
                  <ul className="nk-menu-sub">
                    <li className="nk-menu-item">
                      <a href="https://discord.gg/cilistia" className="nk-menu-link" target="_blank" rel="noreferrer">
                        <span className="nk-menu-text">Discord</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="https://twitter.com/cilistiap2p"
                        className="nk-menu-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="nk-menu-text">Twitter</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a href="https://github.com/cilistia" className="nk-menu-link" target="_blank" rel="noreferrer">
                        <span className="nk-menu-text">Github</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a href="https://cilistia.com" className="nk-menu-link" target="_blank" rel="noreferrer">
                        <span className="nk-menu-text">Website</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="nk-header-tools">
            {address && chain ? (
              <ul className="nk-quick-nav">
                <li className="notification-dropdown" onClick={() => setVisibility(false)}>
                  <Messages />
                </li>
                <li className="notification-dropdown" onClick={() => setVisibility(false)}>
                  <Notification />
                </li>
                <li className="user-dropdown" onClick={() => setVisibility(false)}>
                  <User />
                </li>
                <li className="d-lg-none">
                  <Toggle icon="menu" className="toggle nk-quick-nav-icon me-n1" click={sidebarToggle} />
                </li>
              </ul>
            ) : (
              <ul className="nk-quick-nav">
                <ConnectWalletButton />
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
