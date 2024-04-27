import React, { useState } from 'react'
import { IoMdHome } from 'react-icons/io';
import {GiPieChart} from "react-icons/gi";
import { FaWallet} from "react-icons/fa";
import {FaMessage} from "react-icons/fa6"

const Sidebar = () => {
  const [activeLink, SetActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    SetActiveLink(link)
  };

  return (
    <div>
    <div className='nav-bar1'>
      <ul>
        <li className={activeLink === "Home" ? "active" : ""} onClick={() => handleLinkClick("Home")}><IoMdHome /></li>
        <li className={activeLink !== "Home" ? "active" : ""} onClick={() => handleLinkClick("Chart")}><GiPieChart/></li>
        <li className={activeLink !== "Home" ? "active" : ""} onClick={() => handleLinkClick("Message")}><FaMessage /></li>
        <li className={activeLink !== "Home" ? "active" : ""} onClick={() => handleLinkClick("Wallet")}><FaWallet /></li>
      </ul>
    </div>
      <div className='nav-bar'>
      <ul>
        <li className={activeLink === "Home" ? "active" : ""} onClick={() => handleLinkClick("Home")}><IoMdHome /></li>
        <li className={activeLink !== "Home" ? "active" : ""} onClick={() => handleLinkClick("Chart")}><GiPieChart/></li>
        <li className={activeLink !== "Home" ? "active" : ""} onClick={() => handleLinkClick("Message")}><FaMessage /></li>
        <li className={activeLink !== "Home" ? "active" : ""} onClick={() => handleLinkClick("Wallet")}><FaWallet /></li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar