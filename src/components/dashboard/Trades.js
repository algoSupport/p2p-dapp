import React from "react";
import { CardTitle, Spinner } from "reactstrap";
import { DataTableBody, DataTableHead, DataTableItem, DataTableRow, Icon } from "../Component";
import { useState } from "react";
import useSWR from "swr";
import { Alchemy, Network } from "alchemy-sdk";
import { useAccount } from "wagmi";
import { shortenAddress } from "../../utils/Utils";

const config = {
  apiKey: process.env.ALCHEMY_ID,
  network: Network.ARB_GOERLI,
};
const alchemy = new Alchemy(config);

const Trades = () => {
  const { address } = useAccount();

  const { data: transactions, isLoading } = useSWR(
    `transactions/${address}`,
    async () =>
      alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        fromAddress: address,
        category: ["external", "erc20"],
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
              <span className="me-2">Recent Transactions</span>{" "}
            </h6>
          </CardTitle>
        </div>
      </div>
      <DataTableBody className="border-top is-compact" bodyclass="nk-tb-orders" compact>
        <DataTableHead>
          <DataTableRow>
            <span>Asset</span>
          </DataTableRow>
          <DataTableRow size="sm">
            <span>Amount</span>
          </DataTableRow>
          <DataTableRow size="sm">
            <span>From</span>
          </DataTableRow>
          <DataTableRow size="sm">
            <span>To</span>
          </DataTableRow>
        </DataTableHead>
        {!isLoading &&
          transactions &&
          transactions.transfers.map((transaction) => {
            return (
              <DataTableItem key={transaction.hash}>
                <DataTableRow>
                  <div className="d-flex align-center">
                    <Icon
                      name="sign-eth bg-eth-dim icon-circle"
                      style={{ marginRight: "3px", width: "25px", height: "25px" }}
                    ></Icon>
                    {transaction.asset}
                  </div>
                </DataTableRow>
                <DataTableRow>
                  <span>{transaction.value}</span>
                </DataTableRow>
                <DataTableRow>
                  <span>{shortenAddress(transaction.from)}</span>
                </DataTableRow>
                <DataTableRow>
                  <span>{shortenAddress(transaction.to)}</span>
                </DataTableRow>
              </DataTableItem>
            );
          })}
      </DataTableBody>
      {isLoading ? (
        <div className="d-flex justify-center py-4">
          <Spinner color="primary" />
        </div>
      ) : transactions && transactions.transfers.length === 0 ? (
        <div className="py-3 ms-4 text-center">
          {transactions && transactions.transfers.length === 0 && "You have no recent transactions."}
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
export default Trades;
