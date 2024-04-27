import React from 'react'
import { IoIosNotifications} from "react-icons/io";

const Notification = ({ count }) => {
  return (
    <div>
        <IoIosNotifications className="notification-icon1"/>
        {count > 0 && <span className='notification-count'>{count}</span>}
    </div>
  )
}

export default Notification