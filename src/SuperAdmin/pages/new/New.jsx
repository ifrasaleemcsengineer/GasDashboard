import "./new.scss";
import Sidebar from "../../components/supersidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const New = ({ title }) => {
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

             
                <div className="formInputs" >
                  <label>Name</label>
                  <input type="text" placeholder="Ifra" />
                  <label style={{marginTop: "50px"}}className="labels">Password</label>
                  <input type="email" placeholder="123" />
                  <label style={{marginTop: "50px"}}className="labels">No of Devices</label>
                  <input type="number" placeholder="22" />
                  {/* <label className="labels">DeiveId</label>
                  <input type="text" placeholder="1212234" multiple/> */}
             
              <button style={{marginTop: "30px" , marginLeft:"150px"}}className="createButton">Create</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;