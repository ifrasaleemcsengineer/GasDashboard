import "./new.scss";
import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const NewDevice = ({ title }) => {
  const [setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top-new">
          <h1 className="heading-top">{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form className="form-new">
              <div className="formInput">
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

             
              <div className="formInput" >
                  <label>Device ID</label>
                  <input type="text" />
                  <label style={{marginTop: "50px"}}className="labels">Device Amount</label>
                  <input type="text" />
                  
             
              <button style={{marginTop: "30px" , marginLeft:"150px"}}className="createButton">Create</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDevice;