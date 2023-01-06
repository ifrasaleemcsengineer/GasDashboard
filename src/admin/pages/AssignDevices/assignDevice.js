import Navbar from "../../components/navbar/Navbar";
import { useCallback, useState } from "react";
import "./assign.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const AssignDevices = ({ title }) => {
    
      const [checked, setChecked] = useState([]);
      const checkList = ["001", "002", "003", "004","004","004","004","004"];

      const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
    
      
  

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top-new">
          <h1 className="heading-top">Assign Devices</h1>
            </div>
                      
       <div className="main">
      <div className="checkList">
        <div className="title-device">Devices</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="items">
        {`Devices checked are: [${checkedItems}`}]
      </div>
    </div>
          <div className="input">
          <input type="number" placeholder="Enter Price"/>
          <button className="assign">Assign</button>
          </div>
       
    </div>
        </div>
  );
};

export default AssignDevices;
