import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Task from "./Task";
import Tasks from "./Tasks";
import "./MyAccount.css";

function MyAccountDetails() {
  const [myAccountList, setmyAccountList] = useState([]);

  const addmyAccount = (myAccount) => {
    if (
      (!myAccount.nametext && !myAccount.numbertext && !myAccount.banktext) ||
      (/^\s*$/.test(myAccount.nametext) &&
        /^\s*$/.test(myAccount.numbertext) &&
        /^\s*$/.test(myAccount.banktext))
    ) {
      return;
    }

    const newmyAccountList = [myAccount, ...myAccountList];

    setmyAccountList(newmyAccountList);
    console.log(myAccount, ...myAccountList);
  };

  const removemyAccount = (id) => {
    const removedArr = [...myAccountList].filter(
      (myAccount) => myAccount.id !== id
    );

    setmyAccountList(removedArr);
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatableTitle-setting">My Accounts</div>
        <div className="account">
          <div className="account-info">
            <Tasks onSubmit={addmyAccount} />
            <div className="scroll-bar">
              <Task
                myAccountList={myAccountList}
                removemyAccount={removemyAccount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccountDetails;
