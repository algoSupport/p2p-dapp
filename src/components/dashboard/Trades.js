import React, { useEffect, useState } from "react";
import { CardTitle, Spinner, Pagination } from "reactstrap";
import { DataTableBody, DataTableHead, DataTableItem, DataTableRow, PaginationComponent } from "../Component";
import useSWR from "swr";
import { Alchemy, Network } from "alchemy-sdk";
import { useAccount } from "wagmi";
import { shortenAddress } from "../../utils/Utils";
import { useNetwork } from "wagmi";
import ARB from "../../images/coins/arbitrum.png";

const itemPerPage = 10;

const config = {
  apiKey: process.env.REACT_APP_ALCHEMY_ID,
  network: process.env.REACT_APP_IS_PRODUCTION === "true" ? Network.ARB_MAINNET : Network.ARB_GOERLI,
};

const alchemy = new Alchemy(config);

const Trades = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const { data: transactions, isLoading } = useSWR(
    `${chain?.chainId}/transactions/${address}`,
    async () =>
      alchemy.core
        .getAssetTransfers({
          fromBlock: "0x0",
          fromAddress: address,
          category: ["external", "erc20"],
        })
        .then((res) => res.transfers.filter((item) => !!item.asset)),
    {
      revalidateOnFocus: false,
    }
  );

  useEffect(() => {
    if (transactions) {
      const data = transactions.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);
      setCurrentItems(data);
    }
  }, [transactions, currentPage]);

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
      <DataTableBody className="border-top is-compact border-bottom" compact>
        <DataTableHead>
          <DataTableRow>
            <span>Network</span>
          </DataTableRow>
          <DataTableRow>
            <span>Asset</span>
          </DataTableRow>
          <DataTableRow>
            <span>Amount</span>
          </DataTableRow>
          <DataTableRow>
            <span>From</span>
          </DataTableRow>
          <DataTableRow>
            <span>To</span>
          </DataTableRow>
        </DataTableHead>
        {!isLoading &&
          currentItems.map((transaction) => {
            return (
              <DataTableItem key={`${transaction.uniqueId}_${transaction.hash}`}>
                <DataTableRow>
                  <div className="d-flex align-center">
                    <span>
                      <img src={ARB} style={{ width: "20px", height: "20px" }} alt="network"></img>
                    </span>
                  </div>
                </DataTableRow>
                <DataTableRow>
                  <span>{transaction.asset}</span>
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
      <div className="card is-compact p-2" compact>
        {isLoading ? (
          <div className="d-flex justify-center">
            <Spinner color="primary" />
          </div>
        ) : currentItems.length > 0 ? (
          <Pagination size="sm">
            <PaginationComponent
              itemPerPage={itemPerPage}
              totalItems={transactions && transactions.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </Pagination>
        ) : (
          <div className="text-center" style={{ borderTop: "none" }}>
            <span className="text-silent">You have no recent transactions.</span>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default Trades;
