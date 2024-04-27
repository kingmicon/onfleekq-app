import React, { useState } from 'react'
import { FaPlayCircle, FaStar } from 'react-icons/fa'
import { FaGreaterThan } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { IoTimeSharp } from "react-icons/io5"
import Data from './Data'
import Card from './Card'





const Stats = () => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false)
  };



  return (
    <div className='first-stat'>
      <div className='first-stats'>
        <div className='card-body'>
          <div>
            <div className='chart-line'>

              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="20" viewBox="0 0 44 20" fill="none">
                <path d="M0.799974 19.55C0.649974 19.35 1.49997 18.5 2.74997 17.75C4.49997 16.6 5.39997 15.45 7.29997 11.9C11.8 3.44998 14.7 0.899988 20 0.849988C24.8 0.799988 26.95 1.74998 31.85 5.79998C36.65 9.79998 38.65 10.75 41.3 10.3C43.6 9.84999 43.7 9.84998 43.9 10.45C44.15 11.15 40.05 11.85 38.1 11.45C37.2 11.25 35.3 10.15 33.85 9.04998C32.4 7.89998 30.15 6.09999 28.85 5.04998C26.05 2.84998 23.65 1.99998 20.3 1.99998C15.7 1.99998 12.6 4.59999 8.99997 11.6C6.64997 16.05 4.94997 18.25 2.94997 19.25C1.29997 20.1 1.14997 20.15 0.799974 19.55Z" fill="#3326AE"/>
              </svg>
            </div>
            <div className='chart-body'>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="32" viewBox="0 0 43 32" fill="none">
                <path d="M3 30.85C1.05 29.85 0.5 28.2 0.5 22.9C0.5 18.3 0.550003 18.05 1.8 17.05C2.55 16.45 3.55 16 4.05 16C4.6 16 5 15.7 5 15.4C5 14.95 5.2 15 5.5 15.5C5.9 16.1 6 16.05 6 15.15C6 14.5 6.14999 14 6.39999 14C6.59999 14 7.14999 13.15 7.64999 12.15C8.14999 11.1 8.90001 9.6 9.35001 8.75C9.80001 7.95 10.3 6.9 10.5 6.5C10.7 6.1 11.3 5.55 11.9 5.25C12.6 4.95 12.9 4.44999 12.75 3.89999C12.4 2.84999 14.35 0.950006 15.4 1.35001C15.85 1.55001 16.05 1.44999 15.85 1.14999C15.4 0.399994 16.65 0 19.4 0C22.65 0.05 25.1 0.649994 26.55 1.89999C34.35 8.54999 35.6 9.25 39.4 9.2H42.5V18.8V28.4L40.95 29.95L39.4 31.5H21.85C8.75001 31.5 3.95 31.35 3 30.85Z" fill="#EDECF7"/>
              </svg>
            </div>
          </div>
          <div className='card-text'>
           <h6>VISTORS</h6>
           <h4>10,320</h4>
          </div>
        </div>
        <div className='card-body'>
        <div>
          <div className='chart-line'>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="18" viewBox="0 0 45 18" fill="none">
              <path d="M13.25 17.25C10.15 15.85 8.3 13.55 4.95 7.05C3.35 3.95 2.39998 2.7 1.39998 2.3C-0.0500201 1.75 -0.500002 0.5 0.699998 0.5C2.2 0.5 4.64997 3.30001 6.54997 7.10001C9.09997 12.35 11 14.65 13.8 16C18.1 18 21.7 16.2 26.65 9.7C31.25 3.6 34.3 1.95 39.25 3C41.85 3.55 44.55 5.1 43.95 5.7C43.8 5.85 42.5 5.55 41.1 5C36 3.05 33.3 3.9 29.45 8.55C25.2 13.75 21.3 17.3 19.55 17.65C17 18.15 14.9 18.05 13.25 17.25Z" fill="#3326AE"/>
            </svg>
          </div>
          <div className='chart-body'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="36" viewBox="0 0 44 34" fill="none">
              <path d="M4.14997 33.45C0.999965 32.55 0.899959 32.15 0.799959 15.8C0.749959 4.44999 0.899977 0.949987 1.34998 0.799987C2.04998 0.499987 2.44998 0.999981 2.94998 2.69998C3.69998 5.24998 7.79998 11.35 9.94998 13.15C13.2 15.8 15.45 16.35 19.3 15.35C21.05 14.9 23 14 23.75 13.3C24.55 12.6 25.6 12 26.2 12C27.05 12 27.1 11.9 26.5 11.5C25.9 11.1 25.95 11 26.9 11C27.5 11 28 10.7 28 10.35C28 8.89999 29.55 6.59999 30.75 6.29999C31.65 6.04999 32 5.64998 32 4.74998C32 2.94998 33.75 1.99998 37.1 1.99998C38.7 1.99998 40.5 2.24999 41.15 2.59999C41.75 2.89999 42.6 3.29998 43 3.49998C43.65 3.79998 43.75 5.84998 43.75 17.15C43.75 29.85 43.7 30.5 42.7 31.85C42.1 32.6 41 33.4 40.2 33.55C37.9 34.05 5.89997 33.95 4.14997 33.45Z" fill="#EDECF7"/>
            </svg>
          </div>
          </div>
          <div className='card-text'>
           <h6>CUSTOMERS</h6>
            <h4>4,628</h4>
          </div>
        </div>
        <div className='card-body1'>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="36" viewBox="0 0 49 36" fill="none">
                <path d="M3.84998 34.7C3.09998 34.3 2.25 33.4 2 32.7C1.7 32 1.5 27.3 1.5 22.2C1.5 16.4 1.3 13 1 13C0.75 13 0.5 12.1 0.5 11C0.5 9.34999 0.65 8.99999 1.5 8.99999C2.05 8.99999 2.5 8.8 2.5 8.6C2.5 8.35 3.4 7.84999 4.5 7.49999C5.6 7.14999 6.5 6.64999 6.5 6.39999C6.5 6.19999 6.95 5.99999 7.5 5.99999C8.05 5.99999 8.5 5.64999 8.5 5.24999C8.5 4.79999 8.89998 4.29999 9.34998 4.14999C9.79998 3.94999 10.55 3.44999 11.05 2.94999C12.75 1.24999 16.8 0.349999 21.65 0.599999C24.55 0.749999 26.25 1.04999 26.4 1.39999C26.5 1.74999 27.2 1.99999 28 1.99999C28.8 1.99999 29.75 2.34999 30.2 2.74999C30.6 3.14999 31.15 3.49999 31.45 3.49999C31.75 3.49999 32 3.94999 32 4.49999C32 5.24999 32.35 5.49999 33.45 5.49999C34.25 5.49999 35.25 5.84999 35.7 6.24999C36.1 6.64999 36.9 6.99999 37.45 6.99999C38.15 6.99999 38.5 7.29999 38.5 7.99999C38.5 9.79999 36.85 9.24999 29.4 4.89999C25.55 2.64999 21.5 1.84999 17.9 2.49999C15.25 3.04999 13.45 3.99999 8.09998 7.74999C6.34998 8.99999 4.40001 9.99999 3.70001 9.99999C2.85001 9.99999 2.5 10.25 2.5 11C2.5 11.85 2.70002 11.95 3.90002 11.7C5.95002 11.2 7.95 10.1 11.25 7.6C15.65 4.3 17.05 3.84999 21.6 4.14999C25.6 4.39999 26.4 4.75 32.45 8.55C34.9 10.1 35.5 10.25 38.95 10.25C42.15 10.25 43.05 10.05 44.6 8.99999C45.65 8.29999 46.5 7.44999 46.5 7.14999C46.5 6.24999 47.35 6.35 47.7 7.3C48.25 8.75 48.05 30.75 47.45 32.45C46.4 35.45 46.1 35.5 24.65 35.5C8.30002 35.45 5.04998 35.35 3.84998 34.7Z" fill="#FFFFFF"/>
              </svg>
          </div>
          <div className='card-text'>
           <h6>ORDERS</h6>
           <h4>2,980</h4>
          </div>
        </div>
      </div>
      <div className='statistic-chart1'>
        <div className='statistic-chart1-text'>
          <h3>Statistics</h3>
          <button onClick={() => setShowOptions( !showOptions)}>
            {selectedOption || "Year"} <IoIosArrowDown />
          </button>
          {showOptions && (
            <div>
              <div onClick={() => handleOptionClick("Year")} className={selectedOption === "Year" ? "selected" :""}>Year</div>
             <div onClick={() => handleOptionClick("Month")} className={selectedOption === "Month" ? "selected" :""}>MOnth</div>
            </div>
          )}
        </div>
        <Data />

      </div>
      <div className='statistic-chart2'>
        <div className='chart-stat'>
          <Card />

        </div>
        <div className='stat-card'>
          <div className='card-title'>
            <img src='#' alt='profile-pic' />
            <div className='card-title-text'>
              <h4>Lilly Donovan</h4>
              <h5>Business trainer</h5>
            </div>

          </div>
          <div className='card-text1'>
            <h3>How to properly manage your personal budget?</h3>
            
          </div>
          <div className='card-text2'>
            <div className='card-text2-text'>
              <FaPlayCircle className='card-text2-icon' />
              <p>Video</p>

            </div>
            <div className='card-text2-text'>
              <IoTimeSharp className='card-text3-icon'/>
              <p>15 mins</p>
            </div>
            <div className='card-text2-text'>
              <FaStar className='card-text4-icon'/>
              <p>12 likes</p>
              </div>
          </div>
          <div className='card-text3'>
            <p> 5 days ago</p>
            <button>Connect <span><FaGreaterThan /></span></button>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Stats