import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentIcon from "@mui/icons-material/Payment";
import HistoryIcon from "@mui/icons-material/History";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PolicyIcon from "@mui/icons-material/Policy";
import GavelIcon from "@mui/icons-material/Gavel";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="admintop">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Gas Cylinder</span>
        </Link>
      </div>
      <hr className="break-sidebar" />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/vendors" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Vendors</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/invoice" style={{ textDecoration: "none" }}>
            <li>
              <ReceiptIcon className="icon" />
              <span>Invoice</span>
            </li>
          </Link>
          <Link to="/payment-requests" style={{ textDecoration: "none" }}>
            <li>
              <PaymentIcon className="icon" />
              <span>Payment Requests</span>
            </li>
          </Link>
          <p className="title">HISTORY</p>
          <Link to="/vendors-history" style={{ textDecoration: "none" }}>
            <li>
              <HistoryIcon className="icon" />
              <span>Vendors</span>
            </li>
          </Link>
          <Link to="/users-history" style={{ textDecoration: "none" }}>
            <li>
              <HistoryIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/my-history" style={{ textDecoration: "none" }}>
            <li>
              <HistoryIcon className="icon" />
              <span>My History</span>
            </li>
          </Link>
          <p className="title">SETTINGS</p>
          <Link to="/my-account" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleIcon className="icon" />
              <span>My Accounts</span>
            </li>
          </Link>
          <Link to="/privacy-policy" style={{ textDecoration: "none" }}>
            <li>
              <PolicyIcon className="icon" />
              <span>Privacy Policy</span>
            </li>
          </Link>
          <Link to="/terms&conditions" style={{ textDecoration: "none" }}>
            <li>
              <GavelIcon className="icon" />
              <span>Terms & Conditions</span>
            </li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>

          {/* <p className="title">USEFUL</p> */}
          {/* <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li> */}
          {/* <p className="title">SERVICE</p> */}
          {/* <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li> */}
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li> */}
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
