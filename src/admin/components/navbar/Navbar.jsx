import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper-search">
        <Link to="/contact-us" className="contactUs">
          Contact Us
        </Link>
        <div className="currentUser">areeba@gmail.com</div>
      </div>
    </div>
  );
};

export default Navbar;
