import { useEffect, useState } from "react";
import { utils } from "ethers";
import { getSecret } from "../utils/Utils";

export const useVerify = () => {
  const [verified, SetVerified] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const hashedCode = localStorage.getItem("secret") ?? "";

      if (hashedCode) {
        getSecret().then((secret) => {
          SetVerified(utils.keccak256(hashedCode) === secret);
        });
      } else SetVerified(false);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return verified;
};
