import TokenSelect from "./TokenSelect";
import styles from "./swap.module.scss";
const TokenInput = ({ token, setToken, setTokenClicked, isBuy }) => {
  return (
    <div className={styles.container}>
      <div className="d-flex justify-content-between align-items-center">
        <input type="number" className="form-control" />
        <TokenSelect
          selectedToken={token}
          setSelectedToken={setToken}
          setTokenClicked={setTokenClicked}
          isBuy={isBuy}
        />
      </div>
      <div className="d-flex justify-content-end mt-2">Balance: 0</div>
    </div>
  );
};

export default TokenInput;
