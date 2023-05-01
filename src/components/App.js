import React from "react";
import "./App.css";
import TransactionForm from "./TransactionForm";
import NewTransaction from "./NewTransaction";


function App() {

  function handleUpdateOnSubmission(NewTransaction){
    console.log(NewTransaction)
  }
  return (
    <div className="ui raise segment">
      <div className="header-text">
        <h2>Flatiron Bank</h2>
      </div>
      <NewTransaction onSubmission={handleUpdateOnSubmission}/>
      <TransactionForm/>
    </div>
  );

}

export default App;
