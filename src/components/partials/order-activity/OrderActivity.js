import React, { useState } from "react";
import Icon from "../../icon/Icon";
import { DataTableBody, DataTableHead, DataTableItem, DataTableRow } from "../../table/DataTable";
import { Button } from "../../Component";
import BTC from "../../../images/coins/btc.svg";
import ETH from "../../../images/coins/eth.svg";
import ARB from "../../../images/coins/arbitrum.png";
import CIL from "../../../images/coins/cil.png";
import { Modal, ModalBody, CardTitle, ModalHeader, Spinner } from "reactstrap";
import useSWR from "swr";
import { useAccount } from "wagmi";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { formatUnits } from "ethers/lib/utils.js";

const OrderActivity = () => {
  const chain = EvmChain.ARBITRUM;
  const [modalDeposit, setModalDeposit] = useState(false);
  const toggleDeposit = () => setModalDeposit(!modalDeposit);
  const { address } = useAccount();

  const { data: assets, isLoading } = useSWR(
    `assets/${address}`,
    async () =>
      Moralis.EvmApi.token.getWalletTokenBalances({
        address,
        chain,
      }),
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
              {/* <Link to={`${process.env.PUBLIC_URL}/history-payment`} className="link d-none d-sm-inline">
                View all
              </Link> */}
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

          {/* <DataTableRow size="xl">
            <span>Deposit</span>
            <span className="ms-1" style={{ color: "white", fontSize: "10px" }}>
              APR
            </span>
          </DataTableRow> */}
          <DataTableRow size=""></DataTableRow>
        </DataTableHead>
        {!isLoading &&
          assets &&
          assets.jsonResponse
            .filter((asset) => !asset.possible_spam || asset.symbol === "CIL")
            .map((asset) => {
              return (
                <DataTableItem key={asset.token_address}>
                  <DataTableRow className="nk-tb-orders-type">
                    <span>
                      <img
                        src={asset.symbol === "CIL" ? CIL : ARB}
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
                      <span className="tb-sub">{formatUnits(asset.balance, asset.decimal)}</span>
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
      </DataTableBody>
      {isLoading ? (
        <div className="d-flex justify-center py-4">
          <Spinner color="primary" />
        </div>
      ) : (
        assets &&
        assets.jsonResponse.length === 0 && <div className="py-3 ms-4 text-center">{"You have no assets."}</div>
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
