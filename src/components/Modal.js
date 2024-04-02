import React, { useState } from 'react';
import "../styles/modal.css";

const Modal = ({ setShowModal }) => {
  const [theme, setTheme] = useState('light');

  const handleOptionChange = (event) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  const hideModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className={`modal-container ${theme}`}>
        <div className="theme-object">
          <div className="dark-mode">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={handleOptionChange}
            />
            <label htmlFor="dark" >Dark</label>
          </div>
          <div className="light-mode">
            <input
              type="radio"
              id="light"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={handleOptionChange}
            />
            <label htmlFor="light">Light</label>
          </div>
        </div>
        <div className="cancel">
          <button onClick={hideModal}>Cancel</button>
        </div>
      </div>

    </>
  );
};

export default Modal;
