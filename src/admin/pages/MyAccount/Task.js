import React from "react";

function Task({ myAccountList, removemyAccount }) {
  return myAccountList.map((myAccount, index) => (
    <ol key={index} className="read-content">
      <li>
        <div className="content-info" key={myAccount.id}>
          <p style={{"fontWeight": "bold"}}>
           
            {myAccount.banktext}
          </p>
          <p>
            {myAccount.nametext}
           
          </p>
          <p>
            {myAccount.numbertext}
          </p>
        </div>
        <button
          className="button-close"
          onClick={() => removemyAccount(myAccount.id)}
        >
          {" "}
          Delete
        </button>
      </li>
    </ol>
  ));
}
export default Task;
