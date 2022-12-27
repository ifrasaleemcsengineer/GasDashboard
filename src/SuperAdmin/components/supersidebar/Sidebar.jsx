import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PolicyIcon from '@mui/icons-material/Policy';
import GavelIcon from '@mui/icons-material/Gavel';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Gas Cylinder</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon"/>
              <span>Dashboard</span>
            </li>
          </Link>

          {/* <Link to="/Login" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon  />
              <span>Login</span>
            </li>
          </Link> */}

          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
            <PersonOutlineIcon  className="icon"/>
              <span>Admins</span>
            </li>
          </Link>
          <Link to="/vendors" style={{ textDecoration: "none" }}>
            <li>
            <PersonOutlineIcon  className="icon"/>
              <span>Vendors</span>
            </li>
            </Link>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
            <PersonOutlineIcon  className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/devices" style={{ textDecoration: "none" }}>
            <li>
            <PersonOutlineIcon  className="icon"/>
              <span>Devices</span>
            </li>
          </Link>
          
          <Link to="/Payment-Request" style={{ textDecoration: "none" }}>
            <li>
              <PaymentIcon className="icon"/>
              <span>Payment Requests</span>
            </li>
            </Link>
          
          <p className="title">HISTORY</p>
          <Link to="/admins_history" style={{ textDecoration: "none" }}>
            <li>
              <HistoryIcon className="icon"/>
              <span>Admins</span>
            </li>
          </Link>
          <Link to="/vendors_history" style={{ textDecoration: "none" }}>
            <li>
            <HistoryIcon className="icon"/>
              <span>Vendors</span>
            </li>
          </Link>
          <Link to="/users_history" style={{ textDecoration: "none" }}>
            <li>
            <HistoryIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
         
          <p className="title">SETTINGS</p>
          <Link to="/Myaccount" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleIcon  className="icon"/>
              <span>My Accounts</span>
            </li>
          </Link>
          <Link to="/PrivacyPolicy" style={{ textDecoration: "none" }}>
            <li>
              <PolicyIcon  className="icon"/>
              <span>Privacy Policy</span>
            </li>
          </Link>
          <Link to="/Terms&Conditions" style={{ textDecoration: "none" }}>
            <li>
              <GavelIcon  className="icon"/>
              <span>Terms & Conditions</span>
            </li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <LogoutIcon  className="icon"/>
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

export default Sidebar