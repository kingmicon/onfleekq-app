import React, {  useState } from 'react'
import ToggleButton from './ToggleButton';
import { ToggleContext } from './ToggleContext';


const ToggleProvider = ( ) => {

    const [toggle, setToggle] = useState(false);

    const toggleComponent = () => {
        setToggle(prevToggle => !prevToggle);
    }
  return (
    <ToggleContext.Provider value={{ toggle, toggleComponent }}>

      <ToggleButton />
        
    </ToggleContext.Provider>
  );
};

export default ToggleProvider