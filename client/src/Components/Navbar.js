
import React, { useState } from "react";
import {Link} from 'react-scroll'
import "../Misc/Styles/Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setnav] = useState(false)

  const background=()=>{
    if(window.scrollY>=0){
      setnav(true)
    }
    else{
      setnav(false)
    }
  }
  window.addEventListener('scrool',background)

  return (
    <div id="navi">
    <div className="Navbar">
      <span className="nav-logo">Yogaa</span>
      <div className={`nav-items ${isOpen && "open"}`}>
      <Link to="hpid" smooth={true} duration={1000}>HOME</Link>
           <Link to="addid" smooth={true} duration={1000}>Join US</Link>
           <Link to="aboutid" smooth={true} duration={1000}>ABOUT US</Link>
           <Link to="contactid" smooth={true} duration={1000}>CONTACT US</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;


















