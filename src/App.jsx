import React from "react";
import "./App.css";
import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
import MonetaryTransactions from "./components/MonetaryTransactions/MonetaryTransactions";
import MyWallet from "./components/MyWallet/MyWallet";

function App() {
  return (
    <>
      <ExchangeRate />
      <MonetaryTransactions />
      <MyWallet />
    </>
  );
}

export default App;
