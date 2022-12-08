import React, { useState } from "react";
import "./MyAccount.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { IoIosAddCircle } from "react-icons/io";
import { BankForm, EasyPaisaForm, JazzCashForm } from "./bankform";

function MyAccount() {
  const [openBank, setOpenBank] = useState(false);
  const [openEasyPaisa, setOpenEasyPaisa] = useState(false);
  const [openJazzCash, setOpenJazzCash] = useState(false);

  const style = { color: "orange", fontSize: "2.5em", cursor: "pointer" };
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatableTitle-setting">My Accounts</div>
        <div className="account">
          <div className="account-info">
            {/* bank */}
            <div className="content-setting">
              <div className="content-info">
                <div className="bank">
                  <div className="heading">Bank Account</div>
                  <IoIosAddCircle
                    style={style}
                    onClick={() => {
                      setOpenBank(!openBank);
                    }}
                  />
                </div>
                <div>
                  <div className="sub-content">
                    <p> Bank Number</p>
                    <p> Bank Title</p>
                  </div>
                </div>
              </div>
              <div className={openBank ? "wrapper-info" : "inactive"}>
                <BankForm />
              </div>
            </div>
            <div className="end-list"></div>
            {/* EasyPaisa */}
            <div className="content-setting">
              <div className="content-info">
                <div className="bank">
                  <div className="heading">EasyPaisa Account</div>
                  <IoIosAddCircle
                    style={style}
                    onClick={() => {
                        setOpenEasyPaisa(!openEasyPaisa);
                    }}
                  />
                </div>
                <div>
                  <div className="sub-content">
                    <p> EasyPaisa Number</p>
                    <p> EasyPaisa Title</p>
                  </div>
                </div>
              </div>
              <div className={openEasyPaisa ? "wrapper-info" : "inactive"}>
                <EasyPaisaForm />
              </div>
            </div>
            <div className="end-list"></div>

            {/* JazzCash */}
            <div className="content-setting">
              <div className="content-info">
                <div className="bank">
                  <div className="heading">JazzCash Account</div>
                  <IoIosAddCircle style={style}  onClick={() => {
                        setOpenJazzCash(!openJazzCash);
                    }} />
                </div>
                <div>
                  <div className="sub-content">
                    <p> JazzCash Number</p>
                    <p> JazzCash Title</p>
                  </div>
                </div>
              </div>
              <div className={openJazzCash ? "wrapper-info" : "inactive"}>
                <JazzCashForm />
              </div>
            </div>
            {/* <div className="content">
              <div className="bank">
                <div className="heading">EasyPaisa</div>
                <IoIosAddCircle style={style} />
              </div>
              <div>
                <div className="sub-content">
                  <p> EasyPaisa Number</p>
                  <p> EasyPaisa Title</p>
                </div>
              </div>
            </div>
            <div className="end-list"></div>
            <div className="content">
              <div className="bank">
                <div className="heading">JazzCash</div>
                <IoIosAddCircle style={style} />
              </div>
              <div>
                <div className="sub-content">
                  <p> JazzCash Number</p>
                  <p> JazzCash Title</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
