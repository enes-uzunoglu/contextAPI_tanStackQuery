import React from "react";
import "./MonetaryTransactions.css";
import Deposit from "./Deposit/Deposit";
import Conversion from "./Conversion/Conversion";
import Withdrawal from "./Withdrawal/Withdrawal";

export default function MonetaryTransactions() {
  return (
    <div>
      <Deposit />
      <Conversion />
      <Withdrawal />
    </div>
  );
}
