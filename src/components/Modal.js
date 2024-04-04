import React, { useState } from 'react';
import "../styles/modal.css";

const Modal = ({ setShowModal }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const handleOptionChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme); // Update the theme state first
    localStorage.setItem("theme", selectedTheme); // Store the selected theme in localStorage
    setShowModal(false);
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
