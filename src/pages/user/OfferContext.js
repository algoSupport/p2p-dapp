import React, { useState, createContext } from "react";
import { Currencies, TokenList } from "../../components/swap/TokenSelect";

export const OfferContext = createContext();

export const OfferContextProvider = (props) => {
  const [data, setData] = useState({
    token: TokenList[0].symbol,
    currency: Currencies[0].symbol,
    price: 0,
    type: "fixedPrice",
    minAmount: "",
    maxAmount: "",
    instruction: "",
    autoReply: "",
  });

  return <OfferContext.Provider value={{ contextData: [data, setData] }}>{props.children}</OfferContext.Provider>;
};
