import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

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
                  <label className="label-form">Name</label>
                  <input type="text" placeholder="Areeba" className="input-form" />
                  <label className="label-form">Password</label>
                  <input type="text" placeholder="123456789" className="input-form"/>
                  <label className="label-form">No of Devices</label>
                  <input type="number" placeholder="22" className="input-form"/>
                  <label className="label-form">Device Id</label>
                  <input type="text" placeholder="1212234" multiple className="input-form"/>
                </div>
             
              <button className="createButton">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
