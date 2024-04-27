import React, {useState, useEffect} from 'react'
import { FaPencilAlt, FaPlus } from 'react-icons/fa'
import { PiDotsThreeBold } from "react-icons/pi"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import Vector1 from "../images/Vector (10).svg"
import Vector2 from "../images/Vector@2x.svg"
import Vector3 from "../images/Vector (11).svg"

const Payment = () => {

  const [percentage, setPercentage] = useState(0);
  const value = "38"

  useEffect(() => {
    setPercentage(value);
  }, [value]);


  return (
    <div className='payment-card'>
      <div className='card-pen'>
        <button>
        <FaPencilAlt className='pencil' />
        <PiDotsThreeBold className='dot' />
        </button>
      </div>

      <div className='card-payment-percentage'>
        <div className='card-payment-amount'>
          $10,600
        </div>
        <div className='card-payment-percentage1'>
            <CircularProgressbarWithChildren value={percentage} strokeWidth={4} styles={ buildStyles({
              rotation: 0.20,
              strokeLinecap: "round",
              pathColor: `rgba(51, 38, 174, 1)`,
              textColor: `rgba(51, 38, 174, 1)`,
            })}>
              <div className='card-payment-percentage2'>
                <div className='card-payment-percentage3'>
                  {percentage}%
                </div>
              </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>

      <div className='mycard-payment'>
        <h4>My Card</h4>
        <button><PiDotsThreeBold /></button>
      </div>
      
      <div className='vector-card'>
        <div className='vector-card1'>
          <img src={Vector2} alt='card' className='vector2'/>
          <img src={Vector3} alt='card' className='vector3'/>
          <div className='vector1' ><img src={Vector1} alt='card' className='vector12'  /></div>
          
        </div>
      </div>

      <div className='card-payment-transaction'>
        <h4>Transaction</h4>
        <button className='card-payment-add-button'><FaPlus /></button>
      </div>

      <div className='transanction-history'>
        shoping
      </div>
    </div>
  )
}

export default Payment