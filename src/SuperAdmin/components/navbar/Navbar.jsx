import { Link } from "react-router-dom";
import "./navbar.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper-search">
        {/* <Link to="/ContactForm" className="contactUs">
          Contact Us
        </Link> */}
        <div className="currentUser">ifra@gmail.com</div>
        {/* <KeyboardArrowDownIcon /> */}
      </div>
    </div>
  );
};

export default Navbar;