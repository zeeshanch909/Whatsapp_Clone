import React, { useState } from 'react';
import "../styles/modal.css";

const Modal = ({ setShowModal }) => {
  const [selectedOption, setSelectedOption] = useState('dark');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const hideModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className="modal-container">
        <div className="theme-object">
          <div className="dark-mode">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              checked={selectedOption === 'dark'}
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
              checked={selectedOption === 'light'}
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
