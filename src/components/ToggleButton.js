import React, { useContext } from 'react'
import { ToggleContext } from './ToggleContext';
import Stats from './Stats';
import Payment from './Payment';
import { GiNetworkBars } from 'react-icons/gi';
import {CiCreditCard2} from "react-icons/ci"

const ToggleButton = () => {

    const {toggle, toggleComponent} = useContext(ToggleContext);
    const handleToggle = (component) => {
      if(component === "Stats") {
        toggleComponent();
      } else if (component === "Payment") {
        toggleComponent();
      }
    }
    

  return (
    <div className='toggle-button'>
      <button onClick={ () => handleToggle("Stats")} style={{ backgroundColor: toggle ? "aqua" : "white"}} className='toggle-button1'><CiCreditCard2 /></button>
      <button onClick={() => handleToggle("Payment")} style={{ backgroundColor: toggle ? "white" : "aqua"}}className='toggle-button1'><GiNetworkBars /></button>
      {toggle ? <Stats /> : <Payment />}
    </div>
  )
}

export default ToggleButton