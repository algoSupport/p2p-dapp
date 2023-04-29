import { useEffect, useRef, useState } from "react";
import { Icon } from "../Component";
import styles from "./swap.module.scss";
export const TokenList = [
  {
    id: 1,
    icon: "sign-btc bg-btc-dim icon-circle",
    symbol: "BTC",
  },
  {
    id: 2,
    icon: "sign-eth bg-eth-dim icon-circle",
    symbol: "ETH",
  },
];

export const Currencies = [
  {
    id: 1,
    icon: "sign-usd bg-usd-dim icon-circle",
    symbol: "USD",
  },
];

const TokenSelect = ({ selectedToken, setSelectedToken, setTokenClicked, isBuy }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownBodyRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      dropdownBodyRef.current &&
      !dropdownBodyRef.current.contains(e.target)
    ) {
      setIsDropdown(false);
    }
  };

  return (
    <div className={styles.dropdown}>
      {!!selectedToken ? (
        <div onClick={() => setIsDropdown(!isDropdown)} ref={dropdownRef} className={styles.selectedItem}>
          <Icon name={selectedToken.icon} style={{ width: "25px", height: "25px" }}></Icon>
          <span>{selectedToken.symbol}</span>
          <img src="/images/arrow-up.png" className={`${styles["arrow-icon"]}`} alt="arrow"></img>
        </div>
      ) : (
        <div className={styles.dropItem} onClick={() => setIsDropdown(!isDropdown)} ref={dropdownRef}>
          Token
          <img src="/images/arrow-up.png" className={`${styles["arrow-icon"]}`} alt="arrow"></img>
        </div>
      )}
      {isDropdown && (
        <div className={styles.dropdownBody} ref={dropdownBodyRef}>
          {(isBuy ? Currencies : TokenList).map((token) => {
            return (
              <div
                key={token.symbol}
                onClick={() => {
                  setIsDropdown(false);
                  setTokenClicked();
                  setSelectedToken(token);
                }}
                className={styles.item}
              >
                <Icon name={token.icon} style={{ marginRight: "3px", width: "25px", height: "25px" }}></Icon>
                <span>{token.symbol}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TokenSelect;
