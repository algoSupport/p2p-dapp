import React, { useContext, useEffect, useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Modal,
  ModalBody,
  ModalHeader,
  DropdownItem,
  Alert,
  Pagination,
} from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  UserAvatar,
  PaginationComponent,
  Button,
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  DataTableItem,
  RSelect,
} from "../../components/Component";
import { userData } from "../user/UserData";
import { bulkActionOptions, findUpper } from "../../utils/Utils";
import { UserContext } from "../user/UserContext";
import { useAccount } from "wagmi";
import { useHistory } from "react-router-dom";

const BuyPage = () => {
  const { contextData } = useContext(UserContext);
  const { isConnected } = useAccount();
  const history = useHistory();
  const [data, setData] = contextData;

  const [sm, updateSm] = useState(false);
  const [tablesm, updateTableSm] = useState(false);
  const [onSearch, setonSearch] = useState(true);
  const [onSearchText, setSearchText] = useState("");

  const [actionText, setActionText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [sort, setSortState] = useState("");

  const [modalBuy, setModalBuy] = useState(false);
  const toggleBuy = () => setModalBuy(!modalBuy);

  // Sorting data
  const sortFunc = (params) => {
    let defaultData = data;
    if (params === "asc") {
      let sortedData = defaultData.sort((a, b) => a.name.localeCompare(b.name));
      setData([...sortedData]);
    } else if (params === "dsc") {
      let sortedData = defaultData.sort((a, b) => b.name.localeCompare(a.name));
      setData([...sortedData]);
    }
  };

  // unselects the data on mount
  useEffect(() => {
    let newData;
    newData = userData.map((item) => {
      item.checked = false;
      return item;
    });
    setData([...newData]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Changing state value when searching name
  useEffect(() => {
    if (onSearchText !== "") {
      const filteredObject = userData.filter((item) => {
        return (
          item.name.toLowerCase().includes(onSearchText.toLowerCase()) ||
          item.email.toLowerCase().includes(onSearchText.toLowerCase())
        );
      });
      setData([...filteredObject]);
    } else {
      setData([...userData]);
    }
  }, [onSearchText, setData]);

  // function to set the action to be taken in table header
  const onActionText = (e) => {
    setActionText(e.value);
  };

  // onChange function for searching name
  const onFilterChange = (e) => {
    setSearchText(e.target.value);
  };

  // function which fires on applying selected action
  const onActionClick = (e) => {
    if (actionText === "suspend") {
      let newData = data.map((item) => {
        if (item.checked === true) item.status = "Suspend";
        return item;
      });
      setData([...newData]);
    } else if (actionText === "delete") {
      let newData;
      newData = data.filter((item) => item.checked !== true);
      setData([...newData]);
    }
  };

  // function to toggle the search option
  const toggle = () => setonSearch(!onSearch);

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onCreateOffer = (e) => {
    e.preventDefault();
    if (isConnected) {
      history.push("/marketplace/create-offer");
    }
  };
  return (
    <React.Fragment>
      <Head title="Buy"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                Buy Crypto
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Buy Crypto currency safely and securely</p>
              </BlockDes>
            </BlockHeadContent>

            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand me-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="menu-alt-r"></Icon>
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn btn-secondary btn-dim">
                          <Icon name="filter-alt" className="d-none d-sm-inline"></Icon>
                          <span>Filters</span>
                          <Icon name="chevron-right" className="dd-indc"></Icon>
                        </DropdownToggle>
                        <DropdownMenu end>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>Price</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>Rating</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>Status</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li className="nk-block-tools-opt">
                      <a href="/marketplace/buy" onClick={(e) => onCreateOffer(e)}>
                        <Button color="primary" disabled={!isConnected}>
                          <Icon name="plus"></Icon>
                          <span>Create an offer</span>
                        </Button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
          <Alert className="alert-icon mt-2" color="primary" hidden={!!isConnected}>
            <Icon name="alert-circle" />
            <strong>Please connect your wallet to experience the full preview of Cilistia. </strong>
          </Alert>
        </BlockHead>

        <Block>
          <DataTable>
            <div className="card-inner position-relative card-tools-toggle">
              <div className="card-title-group">
                <div className="card-tools">
                  <div className="form-inline flex-nowrap gx-3">
                    <div className="form-wrap">
                      <RSelect
                        options={bulkActionOptions}
                        className="w-150px"
                        placeholder="Filter by asset"
                        onChange={(e) => onActionText(e)}
                      />
                    </div>
                    <div className="btn-wrap">
                      <span className="d-none d-md-block">
                        <Button
                          disabled={actionText !== "" ? false : true}
                          color="primary"
                          outline
                          className="btn-dim"
                          onClick={(e) => onActionClick(e)}
                        >
                          Apply
                        </Button>
                      </span>
                      <span className="d-md-none">
                        <Button
                          color="light"
                          outline
                          disabled={actionText !== "" ? false : true}
                          className="btn-dim btn-icon"
                          onClick={(e) => onActionClick(e)}
                        >
                          <Icon name="arrow-right"></Icon>
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-tools me-n1">
                  <ul className="btn-toolbar gx-1">
                    <li>
                      <a
                        href="#search"
                        onClick={(ev) => {
                          ev.preventDefault();
                          toggle();
                        }}
                        className="btn btn-icon search-toggle toggle-search"
                      >
                        <Icon name="search"></Icon>
                      </a>
                    </li>
                    <li className="btn-toolbar-sep"></li>
                    <li>
                      <div className="toggle-wrap">
                        <Button
                          className={`btn-icon btn-trigger toggle ${tablesm ? "active" : ""}`}
                          onClick={() => updateTableSm(true)}
                        >
                          <Icon name="menu-right"></Icon>
                        </Button>
                        <div className={`toggle-content ${tablesm ? "content-active" : ""}`}>
                          <ul className="btn-toolbar gx-1">
                            <li className="toggle-close">
                              <Button className="btn-icon btn-trigger toggle" onClick={() => updateTableSm(false)}>
                                <Icon name="arrow-left"></Icon>
                              </Button>
                            </li>

                            <li>
                              <UncontrolledDropdown>
                                <DropdownToggle color="tranparent" className="btn btn-trigger btn-icon dropdown-toggle">
                                  <Icon name="setting"></Icon>
                                </DropdownToggle>
                                <DropdownMenu end className="dropdown-menu-xs">
                                  <ul className="link-check">
                                    <li>
                                      <span>Show</span>
                                    </li>

                                    <li className={itemPerPage === 10 ? "active" : ""}>
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                          setItemPerPage(10);
                                        }}
                                      >
                                        10
                                      </DropdownItem>
                                    </li>
                                    <li className={itemPerPage === 15 ? "active" : ""}>
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                          setItemPerPage(15);
                                        }}
                                      >
                                        15
                                      </DropdownItem>
                                    </li>
                                  </ul>
                                  <ul className="link-check">
                                    <li>
                                      <span>Order</span>
                                    </li>
                                    <li className={sort === "dsc" ? "active" : ""}>
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                          setSortState("dsc");
                                          sortFunc("dsc");
                                        }}
                                      >
                                        DESC
                                      </DropdownItem>
                                    </li>
                                    <li className={sort === "asc" ? "active" : ""}>
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                          setSortState("asc");
                                          sortFunc("asc");
                                        }}
                                      >
                                        ASC
                                      </DropdownItem>
                                    </li>
                                  </ul>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`card-search search-wrap ${!onSearch && "active"}`}>
                <div className="card-body">
                  <div className="search-content">
                    <Button
                      className="search-back btn-icon toggle-search active"
                      onClick={() => {
                        setSearchText("");
                        toggle();
                      }}
                    >
                      <Icon name="arrow-left"></Icon>
                    </Button>
                    <input
                      type="text"
                      className="border-transparent form-focus-none form-control"
                      placeholder="Search for users or offers..."
                      value={onSearchText}
                      onChange={(e) => onFilterChange(e)}
                    />
                    <Button className="search-submit btn-icon me-2">
                      <Icon name="search"></Icon>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <DataTableBody>
              <DataTableHead>
                <DataTableRow>
                  <span className="sub-text">User</span>
                </DataTableRow>
                <DataTableRow size="mb">
                  <span className="sub-text">Price</span>
                </DataTableRow>
                <DataTableRow size="md">
                  <span className="sub-text">Min</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Max</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">AVG. Trade</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Verification</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Rating</span>
                </DataTableRow>

                <DataTableRow size="md">
                  <span className="sub-text">Status</span>
                </DataTableRow>
                <DataTableRow>
                  <span className="sub-text"></span>
                </DataTableRow>
              </DataTableHead>

              {/*Head*/}
              {currentItems.length > 0
                ? currentItems.map((item) => {
                    return (
                      <DataTableItem key={item.id}>
                        <DataTableRow>
                          <div className="user-card">
                            <UserAvatar
                              theme={item.avatarBg}
                              text={findUpper(item.name)}
                              image={item.image}
                            ></UserAvatar>
                            <div className="user-info">
                              <span className="tb-lead">
                                {item.name}{" "}
                                <span
                                  className={`dot dot-${
                                    item.status === "Online" ? "success" : item.status === "Away" ? "warning" : "danger"
                                  } d-md-none ms-1`}
                                ></span>
                              </span>
                              <span>{item.email}</span>
                            </div>
                          </div>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <span className="tb-amount">
                            {item.price} <span className="currency">USD</span>
                          </span>
                        </DataTableRow>
                        <DataTableRow size="md">
                          <span>{item.min}</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <span>{item.max}</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <ul className="list-status">
                            <li>
                              <Icon name="alarm-alt text-info"></Icon> <span>{item.avg}</span>
                            </li>
                          </ul>
                        </DataTableRow>

                        <DataTableRow size="lg">
                          <ul className="list-status">
                            <li>
                              <Icon
                                className={`text-${
                                  item.kycStatus === "success"
                                    ? "success"
                                    : item.kycStatus === "pending"
                                    ? "info"
                                    : item.kycStatus === "warning"
                                    ? "warning"
                                    : "secondary"
                                }`}
                                name={`${
                                  item.kycStatus === "success"
                                    ? "check-circle"
                                    : item.kycStatus === "pending"
                                    ? "alarm-alt"
                                    : "alert-circle"
                                }`}
                              ></Icon>{" "}
                              <span>Verified</span>
                            </li>
                          </ul>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <span>
                            <ul className="rating mt-1">
                              <li>
                                <Icon name="star-fill"></Icon>
                              </li>
                              <li>
                                <Icon name="star-fill"></Icon>
                              </li>
                              <li>
                                <Icon name="star-fill"></Icon>
                              </li>
                              <li>
                                <Icon name="star-half-fill"></Icon>
                              </li>
                              <li>
                                <Icon name="star"></Icon>
                              </li>
                            </ul>
                          </span>
                        </DataTableRow>
                        <DataTableRow size="md">
                          <span
                            className={`tb-status text-${
                              item.status === "Online" ? "success" : item.status === "Away" ? "warning" : "danger"
                            }`}
                          >
                            {item.status}
                          </span>
                        </DataTableRow>

                        <DataTableRow>
                          <span>
                            <button
                              className="btn btn-primary btn-sm w-100 center"
                              disabled={!isConnected}
                              onClick={toggleBuy}
                            >
                              Buy
                            </button>
                          </span>
                        </DataTableRow>
                      </DataTableItem>
                    );
                  })
                : null}
            </DataTableBody>

            <div className="card-inner p-2">
              {currentItems.length > 0 ? (
                <Pagination size="sm">
                  <PaginationComponent
                    itemPerPage={itemPerPage}
                    totalItems={data.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </Pagination>
              ) : (
                <div className="text-center">
                  <span className="text-silent">No data found</span>
                </div>
              )}
            </div>
          </DataTable>
        </Block>
        <Modal isOpen={modalBuy} toggle={toggleBuy} modalClassName="zoom">
          <ModalHeader
            toggle={toggleBuy}
            close={
              <button className="close" onClick={toggleBuy}>
                <Icon name="cross" />
              </button>
            }
          >
            Buy
          </ModalHeader>
          <ModalBody>
            <p>Buying is not yet available. This is just a preview of the updated UI.</p>
          </ModalBody>
        </Modal>
      </Content>
    </React.Fragment>
  );
};
export default BuyPage;
