import React, { useEffect, useState } from "react";
import TransactionItem from "./TransactionItem.js";

function TransactionForm() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then((transc) => setTransactions(transc))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table>
        <tr>
          <th>DATE</th>
          <th>CATEGORY</th>
          <th>DESCRIPTION</th>
          <th>AMOUNT</th>
        </tr>
        {transactions.map((transaction, index) => {
          return (
            <TransactionItem
            index={index}
            date={transaction.date}
            category={transaction.category}
            description={transaction.description}
            amount={transaction.amount}
            key={transaction.id}
          />
        );
      })}
    </table>
  </>
);
}
export default TransactionForm;
