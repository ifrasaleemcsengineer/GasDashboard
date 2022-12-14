import "./single.scss";
import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import avatar from "./avatar.jpg";
import { useState } from "react";

const SingleVendor = () => {
  const [viewVendor, setviewVendor] = useState([])
//   const data = [
//     { ID: "1", Weight: "2 Kg"},
//     { ID: "1", Weight: "2 Kg"},
//     { ID: "1", Weight: "2 Kg"},
//     { ID: "1", Weight: "2 Kg"},
//     { ID: "1", Weight: "2 Kg"},
    
   
// ]
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            
            <h1 className="title">Vendor Information</h1>
            <div className="item">
              <img
                src={avatar}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Ifra</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Vendor ID:</span>
                  <span className="itemValue">123</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Admin ID:</span>
                  <span className="itemValue">
                    123
                  </span>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Number of devices:</span>
                  <span className="itemValue">4</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          <div className="details">
          <div className="detailItem">
          <h1 className="title">Devices</h1>
          <table>
            <tr>
                <th>Device ID</th>
                <th>Weight</th>
                
            </tr>
            {viewVendor.map((val, key) => {
                return(
                    <tr key={key}>
                        <td>{val.ID}</td>
                        <td>{val.Weight}</td>
                        
                    </tr>
                )
            })}
        </table>
                </div>
                </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SingleVendor;
