import React, { useState } from "react";
import { Collapse } from "reactstrap";

const Accordion = ({ className, variation, ...props }) => {
  const [isOpen, setIsOpen] = useState("1");

  const toggleCollapse = (param) => {
    if (param === isOpen) {
      setIsOpen("0");
    } else {
      setIsOpen(param);
    }
  };

  return (
    <div className={[`accordion${variation ? " accordion-s" + variation : ""}${className ? " " + className : ""}`]}>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "1" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("1")}>
          <h6 className="title">What is Cilistia?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "1" ? true : false}>
          <div className="accordion-inner">
            <p>
              Cilistia is a decentralized marketplace built on the Arbitrum blockchain that allows users to buy and sell
              digital assets, including cryptocurrencies, NFTs, and more.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "2" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("2")}>
          <h6 className="title">What is the $CIL token used for?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "2" ? true : false}>
          <div className="accordion-inner">
            <p>
              The $CIL token is used as the native currency on the Cilistia marketplace. It is used for staking,
              transaction fees, and as a means of exchange for buying and selling digital assets.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "3" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("3")}>
          <h6 className="title">How can I earn rewards by staking $CIL?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "3" ? true : false}>
          <div className="accordion-inner">
            <p>
              By staking $CIL, stakers can earn 70% of the marketplace's transaction fees. Sellers on the marketplace
              are required to stake $CIL in order to open sell positions, and staking also helps to secure buyers on the
              marketplace.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "4" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("4")}>
          <h6 className="title">What is the Minimum Price Fund (MPF)?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "4" ? true : false}>
          <div className="accordion-inner">
            <p>
              The MPF is a mechanism implemented on the Cilistia protocol to ensure that the price of the $CIL token
              remains above a certain threshold. 10% of all revenue generated on the protocol is added to the MPF.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "5" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("5")}>
          <h6 className="title">How does the MPF work?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "5" ? true : false}>
          <div className="accordion-inner">
            <p>
              The MPF operates through a smart contract that is triggered when the price of $CIL falls below a certain
              threshold. The smart contract is programmed to buy up and burn a certain amount of $CIL in order to
              increase the price of the $CIL token.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "6" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("6")}>
          <h6 className="title">Can I withdraw my staked $CIL at any time?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "6" ? true : false}>
          <div className="accordion-inner">
            <p>
              Yes, $CIL can be unstaked and withdrawn at any time. However, if a seller has an open trade on the
              exchange, there is a 7-day time lock on the withdrawal of staked $CIL.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "7" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("7")}>
          <h6 className="title">What other currencies can I trade on the Cilistia marketplace?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "7" ? true : false}>
          <div className="accordion-inner">
            <p>
              Besides $CIL, users can trade other currencies such as WBTC, ETH, USDT, USDC, and more on multiple
              networks.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "8" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("8")}>
          <h6 className="title">Is Cilistia decentralized?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "8" ? true : false}>
          <div className="accordion-inner">
            <p>
              Yes, Cilistia is a decentralized marketplace built on the Arbitrum blockchain, which means that it is not
              controlled by any central authority.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "9" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("9")}>
          <h6 className="title">What is the governance vote used for?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "9" ? true : false}>
          <div className="accordion-inner">
            <p>
              The governance vote is used to determine the direction of the Cilistia protocol. Token holders can vote on
              proposals that can affect the marketplace, such as adding new features, changing the staking rules, or
              modifying the MPF.
            </p>
          </div>
        </Collapse>
      </div>
      <div className="accordion-item">
        <div className={[`accordion-head${isOpen !== "10" ? " collapsed" : ""}`]} onClick={() => toggleCollapse("10")}>
          <h6 className="title">How can I get started on Cilistia?</h6>
          <span className="accordion-icon"></span>
        </div>
        <Collapse className="accordion-body" isOpen={isOpen === "10" ? true : false}>
          <div className="accordion-inner">
            <p>
              To get started on Cilistia, users can create an account, deposit $CIL or other currencies, and start
              buying and selling digital assets on the marketplace. Staking $CIL is also an option to earn rewards on
              the platform.
            </p>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Accordion;
