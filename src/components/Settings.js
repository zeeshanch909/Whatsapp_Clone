import React, { useState } from 'react';
import '../styles/settings.css';
import { IoArrowBack } from "react-icons/io5";
import { SearchBox, SearchContainer, SearchIcon, SearchInput } from './ContactListComponents';
import Modal from './Modal';
const logoImg = require("../chadhar.png");

const Settings = ({ setShowSetting, setShowMenu }) => {

  const [showModal, setShowModal] = useState(false);


  const handleClick = () => {
    setShowSetting(false); // Set showSetting to false when the arrow back is clicked
    setShowMenu(false);
  };


  const handleModal = () => {
    console.log("theme clicked")
    setShowModal(true);
  }

  return (
    <>
      <div className="settings-container">
        <div className="settings-heading">
          <IoArrowBack onClick={handleClick} />
          Settings
        </div>
        <SearchBox>
          <SearchContainer>
            <SearchIcon src={'/search-icon.svg'} />
            <SearchInput placeholder="Search or start new chat" />
          </SearchContainer>
        </SearchBox>
        <div className="description">
          <img src={logoImg} />
        </div>
        <div className="settings-items">
          <ul>
            <li>Notifications</li>
            <li>Privacy</li>
            <li>Security</li>
            <li onClick={handleModal}>Theme</li>
            <li>Chat Wallpaper</li>
          </ul>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default Settings;