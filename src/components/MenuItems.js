import React from 'react'
import { useState } from 'react'
import '../styles/menu-items.css'
import Settings from './Settings'


const MenuItems = ({ setShowMenu }) => {
  const [showSetting, setShowSetting] = useState(false)

  const openSetting = () => {
    setShowSetting(!showSetting);
    console.log("settting Clicked!");
  };

  return (
    <>
      <div className='items-container'>
        <ul>
          <li>New Group</li>
          <li>New Community</li>
          <li onClick={openSetting}>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
      {showSetting && <Settings setShowMenu={setShowMenu} setShowSetting={setShowSetting} />}
    </>
  )
}

export default MenuItems

