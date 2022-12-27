import "./widget.scss";
import { useState } from "react";

const Widget = ({ type }) => {
  let data;
  const [adminAmount, setadminAmount] = useState(200)
  const [vendorAmount, setvendorAmount] = useState(100)
  const [userAmount, setuserAmount] = useState(50)

  //temporary
 
  // const diff = 20;

  switch (type) {
    case "admin":
      data = {
        title: "ADMINS",
        isMoney: false,
        amount: adminAmount
        // link: "See all users",
        // icon: (
        //   <PersonOutlinedIcon
        //     className="icon"
        //     style={{
        //       color: "crimson",
        //       backgroundColor: "rgba(255, 0, 0, 0.2)",
        //     }}
        //   />
        // ),
      };
      break;
    case "vendor":
      data = {
        title: "VENDORS",
        isMoney: false,
        amount: vendorAmount
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
        title: "USERS",
        isMoney: false,
        amount: userAmount
        // link: "View net earnings",
      //   icon: (
      //     <MonetizationOnOutlinedIcon
      //       className="icon"
      //       style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
      //     />
      //   ),
      };
      break;
    // case "balance":
    //   data = {
    //     title: "BALANCE",
    //     isMoney: true,
    //     link: "See details",
    //     icon: (
    //       <AccountBalanceWalletOutlinedIcon
    //         className="icon"
    //         style={{
    //           backgroundColor: "rgba(128, 0, 128, 0.2)",
    //           color: "purple",
    //         }}
    //       />
    //     ),
    //   };
    //   break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
        {data.amount}
           {/* {adminAmount} */}
        </span>
        
        
      </div>
      
    </div>
  );
};

export default Widget;
