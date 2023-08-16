'use client'
import React, { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Modal from "react-modal"; 
import "./page.css";


const QuestionButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button className="question-button" onClick={openModal}>
        <AiOutlineQuestionCircle className="icon" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <div className="image-container">
          <img src="how.png" alt="Imagen en el modal" />
        </div>
    
      </Modal>
    </>
  );
};

export default QuestionButton;