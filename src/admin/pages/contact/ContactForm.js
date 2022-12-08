import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Contact from "./Contact";

function ContactForm() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Contact />
      </div>
    </div>
  );
}

export default ContactForm;
