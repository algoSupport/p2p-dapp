import React, { useState } from "react";
import Icon from "../../icon/Icon";
import { DataTableBody, DataTableHead, DataTableItem, DataTableRow } from "../../table/DataTable";
import { Button } from "../../Component";
//import BTC from "../../../images/coins/btc.svg";
import BTC from "../../../images/coins/btc.svg";
import ETH from "../../../images/coins/eth.svg";
import ARB from "../../../images/coins/arbitrum.png";
import CIL from "../../../images/coins/cil.png";
import { Modal, ModalBody, CardTitle, ModalHeader, Spinner } from "reactstrap";
import useSWR from "swr";
import { useAccount } from "wagmi";
import { formatEther } from "ethers/lib/utils.js";
import { useNetwork } from "wagmi";
import { Alchemy, BigNumber, Network } from "alchemy-sdk";

const config = {
  apiKey: process.env.REACT_APP_ALCHEMY_ID,
  network: process.env.REACT_APP_IS_PRODUCTION === "true" ? Network.ARB_MAINNET : Network.ARB_GOERLI,
};

const alchemy = new Alchemy(config);

const SUPPORTED_TOKENS = ["WBTC", "ETH", "WETH", "ARB", "USDC", "USDT", "CIL"];

const OrderActivity = () => {
  const [modalDeposit, setModalDeposit] = useState(false);
  const toggleDeposit = () => setModalDeposit(!modalDeposit);
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { data: assets, isLoading } = useSWR(
    `${chain?.id}/assets/${address}`,
    async () => {
      const balances = await alchemy.core.getTokenBalances(address);
      // Remove tokens with zero balance
      const nonZeroBalances = balances.tokenBalances.filter((token) => {
        return !BigNumber.from(token.tokenBalance).isZero();
      });

      const data = [];
      for (let token of nonZeroBalances) {
        // Get balance of token
        let balance = token.tokenBalance;

        // Get metadata of token
        const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);

        // Compute token balance in human-readable format
        balance = balance / Math.pow(10, metadata.decimals);
        balance = balance.toFixed(3);

        // Print name, balance, and symbol of token
        data.push({
          balance,
          symbol: metadata.symbol,
          name: metadata.name,
          logo: metadata.logo,
        });
      }
      return data;
    },
    {
      revalidateOnFocus: false,
    }
  );

  const { data: nativeAsset, isLoading: isNativeLoading } = useSWR(
    `${chain?.id}/native_assets/${address}`,
    async () => alchemy.core.getBalance(address, "latest"),
    {
      revalidateOnFocus: false,
    }
  );

  return (
    <React.Fragment>
      <div className="card-inner">
        <div className="card-title-group">
          <CardTitle>
            <h6 className="title">
              <span className="me-2">Wallets</span>{" "}
            </h6>
          </CardTitle>
        </div>
      </div>
      <DataTableBody className="border-top is-compact" bodyclass="nk-tb-orders" compact>
        <DataTableHead>
          <DataTableRow className="nk-tb-orders-type">
            <span>Network</span>
          </DataTableRow>
          <DataTableRow className="nk-tb-orders-type">
            <span>Asset</span>
          </DataTableRow>
          <DataTableRow>
            <span>Balance</span>
          </DataTableRow>
          <DataTableRow size=""></DataTableRow>
        </DataTableHead>
        {!isLoading && !isNativeLoading && (
          <>
            {nativeAsset && (
              <DataTableItem>
                <DataTableRow className="nk-tb-orders-type">
                  <span>
                    <img src={ARB} style={{ width: "20px", height: "20px" }} alt="network"></img>
                  </span>
                </DataTableRow>
                <DataTableRow className="nk-tb-orders-type">
                  <span>ETH</span>
                </DataTableRow>
                <DataTableRow>
                  <div className="d-flex align-center">
                    <span className="tb-sub">{Number(formatEther(nativeAsset)).toFixed(4)}</span>
                  </div>
                </DataTableRow>

                <DataTableRow className="text-end me-2">
                  <Button color="outline-primary" size="sm" className="btn-dim" onClick={toggleDeposit}>
                    Deposit
                  </Button>

                  <Button color="secondary" size="sm" className="ms-3 btn-dim">
                    Withdraw
                  </Button>
                </DataTableRow>
              </DataTableItem>
            )}
            {assets &&
              assets
                .filter((asset) => SUPPORTED_TOKENS.includes(asset.symbol))
                .map((asset) => {
                  return (
                    <DataTableItem key={asset.token_address}>
                      <DataTableRow className="nk-tb-orders-type">
                        <span>
                          <img
                            src={asset.logo ? asset.logo : asset.symbol === "CIL" ? CIL : ARB}
                            style={{ width: "20px", height: "20px" }}
                            alt="network"
                          ></img>
                        </span>
                      </DataTableRow>
                      <DataTableRow className="nk-tb-orders-type">
                        <span>{asset.symbol}</span>
                      </DataTableRow>
                      <DataTableRow>
                        <div className="d-flex align-center">
                          <span className="tb-sub">{asset.balance}</span>
                        </div>
                      </DataTableRow>

                      <DataTableRow className="text-end me-2">
                        <Button color="outline-primary" size="sm" className="btn-dim" onClick={toggleDeposit}>
                          Deposit
                        </Button>

                        <Button color="secondary" size="sm" className="ms-3 btn-dim">
                          Withdraw
                        </Button>
                      </DataTableRow>
                    </DataTableItem>
                  );
                })}
          </>
        )}
      </DataTableBody>
      {(isLoading || isNativeLoading) && (
        <div className="d-flex justify-center py-4">
          <Spinner color="primary" />
        </div>
      )}
      <Modal isOpen={modalDeposit} toggle={toggleDeposit} modalClassName="zoom">
        <ModalHeader
          toggle={toggleDeposit}
          close={
            <button className="close" onClick={toggleDeposit}>
              <Icon name="cross" />
            </button>
          }
        >
          Deposit
        </ModalHeader>
        <ModalBody>
          <p>Deposits are not yet available on this preview. Please check back later.</p>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
export default OrderActivity;
