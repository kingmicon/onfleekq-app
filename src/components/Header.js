import { useState } from "react";
import React from 'react'
import {FaSearch} from "react-icons/fa";
import Image1 from "../images/avatar-man.jpg";
import Image2 from "../images/avatar-woman.jpg";
import Notification from "./Notification";

const Header = () => {

    const [text, setText] = useState('');
  
  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        search();
    }
  };
  const search = () => {
    console.log("searching for:", text)

    setText("");

  }
    const notificatioCount = 1;
    const images =[
        Image1,
        Image2
    ]; 

    const [showModal, setShowModal] = useState(false);
    const [ currentImage, setCurrentImage] = useState(Image1);

    const handleImageClick = (image) => {
        setCurrentImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    }

  return (
    <div className='Header-body'>
        <div className='search-bar'>
            <span className='search-button'><FaSearch/></span>
            <input type='text' value={text} onKeyPress={handleKeyPress} placeholder= "Search" className='search-input' onChange={handleChange} />

        </div>
        <div className='Header-nav'>
            <ul>
                <li><a href='/feedback'>Feedback</a></li>
                <li><a href='/contact'>Contacts</a></li>
                <li><a href='/help'>Help</a></li>
            </ul>

        </div>
        <div className='Header-notification'>
            <div className='notification-icon'>
                <button type="button" className="notification-button">
                <Notification count = {notificatioCount} />
                </button>
            </div>
            <div>
                <img src= {currentImage} alt = "Main" onClick={() =>handleImageClick(currentImage)} />

                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            {images.map ((image, index) => (
                                <img key={index} src={image} alt={`Images ${index}`} className={currentImage === image ? "active" : ""} onClick={()=> setCurrentImage(image)} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>

    </div>
  )
}

export default Header