import React from "react";
import "./invoice.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "./popup";
import { useState } from "react";


// import { Col, Divider, Row, Table } from 'antd';
// import 'antd/dist/antd.css';

function printReceipt() {
  window.print();
}

const Invoice = () => {
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [data, setData] = useState([])
  const [setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="list">
      <div className=" hide-on-print">
        <Sidebar />
      </div>
      <div className="listContainer">
        <div className=" hide-on-print">
          <Navbar />
        </div>

        <div className="invoice-main">
          <div className="invoice-head">Invoice</div>

          <p className="header">Gas Cylinder</p>

          <div className="sender">
            <p>Name</p>
            <p>ID</p>
            {/* <p>Phone number</p> */}
          </div>
          <div className="info-print">
            <div className="receiver">
              <h1>Client Information:</h1>
              <p>Name</p>
              <p>ID</p>
              {/* <p>Phone number</p>  */}
            </div>

            <div className="order-info">
              <h1>Order Information:</h1>
              <p>Issue Date: </p>
              {/* <p>Due Date: </p> */}
              <p>Status: </p>
              <p>ID: </p>
            </div>

            <div className="ivoice-info">
              <h1>Invoice # 01</h1>
             
          </div>

          <div className="invoice-table">
            <table className="after-print">
              <tr className="after-print-head">
                <th>Device ID</th>
                {/* <th>Quantity</th> */}
                <th>Amount</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.ID}</td>
                    {/* <td>{val.Quantity}</td> */}
                    <td>{val.Amount}</td>
                  </tr>
                );
              })}
            </table>
            <div className="total">
              <div className = "total-print">
              <div className="total-body">
                <p>Sub Total:</p>
                {/* <p>Discount:</p>
                <p>Previous weight:</p> */}
                <div className="borders"></div>
                <p
                  style={{
                    color: "orange",
                    marginTop: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Total:
                </p>
                </div>
              </div>
            </div>

            <div className="buttons hide-on-print">
              <button
                style={{ width: "60px", cursor: "pointer" }}
                onClick={printReceipt}
              >
                Print
              </button>
              <button
                style={{ width: "60px", marginLeft: "15px", cursor: "pointer" }}
                onClick={() => setbuttonPopup(true)}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}>
          <h3>Account Information</h3>
          <h4 style={{ marginTop: "15px", fontSize: "8" }}>Bank Account</h4>
          <p>Bank Account Title</p>
          <p>Bank Account Number</p>
          <h4 style={{ marginTop: "15px", fontSize: "8" }}>
            EasyPaisa Account
          </h4>
          <p>EasyPaisa Account Title</p>
          <p>EasyPaisa Account Number</p>
          <h4 style={{ marginTop: "15px", fontSize: "8" }}>JazzCash Account</h4>
          <p>JazzCash Account Title</p>
          <p>JazzCash Account Number</p>
          <input type="file" id="upload" onChange={handleChange}></input>
          {/* <img src={file} className="img-file"></img> */}
          <button className="label_invoice">Upload Snapshot</button>
        </Popup>
      </div>
    </div>
    </div>
  );
};

export default Invoice;
