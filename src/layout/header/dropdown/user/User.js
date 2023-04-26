import React, { useState } from "react";
import UserAvatar from "../../../../components/user/UserAvatar";
import { DropdownToggle, DropdownMenu, Dropdown } from "reactstrap";
import { Icon } from "../../../../components/Component";
import { LinkList, LinkItem } from "../../../../components/links/Links";
import { useDisconnect, useAccount, useNetwork } from 'wagmi'
import { shortenAddress } from "../../../../utils/Utils";

const User = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prevState) => !prevState);
  const { disconnect } = useDisconnect()
  const { address, isConnecting, isDisconnected } = useAccount();
  const { chain, chains } = useNetwork()

  const handleSignout = () => {
    disconnect()
  };

  return (
    <Dropdown isOpen={open} className="user-dropdown" toggle={toggle}>
      <DropdownToggle
        tag="a"
        href="#toggle"
        className="dropdown-toggle"
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        <div className="user-toggle">
          <UserAvatar icon="user-alt" className="sm" />
        </div>
      </DropdownToggle>
      <DropdownMenu end className="dropdown-menu-md dropdown-menu-s1">
        <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
          <div className="user-card sm">
            <div className="user-avatar">
              <span>AB</span>
            </div>
            <div className="user-info">
              {/* Display network here */}
              <span className="lead-text">{chain.name}</span>
              {/* Display wallet address here */}
              <span className="sub-text">{shortenAddress(address)}</span>
            </div>
          </div>
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <LinkItem link="#" icon="swap-v" onClick={toggle}>
              Switch Networks
            </LinkItem>
            <LinkItem link="/profile/details" icon="setting-alt" onClick={toggle}>
              Account Settings
            </LinkItem>
          </LinkList>
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <a href='#' onClick={handleSignout}>
              <Icon name="unlink"></Icon>
              <span>Disconnect</span>
            </a>
          </LinkList>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default User;
