import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useState } from "react";

const Widget = ({ type }) => {
const [deviceCount , setDeviceCount] = useState(100)
const [vendorCount , setVendorCount] = useState(200)
const [userCount , setUserCount] = useState(300)

  let data;

  //temporary

  switch (type) {
   
    case "vendor":
      data = {
        title: "TOTAL VENDORS",
        count: vendorCount, 
        // link: "View all orders",
        // icon: (
        //   <ShoppingCartOutlinedIcon
        //     className="icon"
        //     style={{
        //       backgroundColor: "rgba(218, 165, 32, 0.2)",
        //       color: "goldenrod",
        //     }}
        //   />
        // ),
      };
      break;
    case "user":
      data = {
        title: "TOTAL USERS",
        count: userCount, 
        // link: "View net earnings",
        //   icon: (
        //     <MonetizationOnOutlinedIcon
        //       className="icon"
        //       style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        //     />
        //   ),
      };
      break;
   
    case "devices":
      data = {
        title: "TOTAL DEVICES",
        count: deviceCount, 
        // link: "View net earnings",
        //   icon: (
        //     <MonetizationOnOutlinedIcon
        //       className="icon"
        //       style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        //     />
        //   ),
      };
      break;
   
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.count}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          {/* <KeyboardArrowUpIcon /> */}
          {/* {diff} % */}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
