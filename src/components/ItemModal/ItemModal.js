import React from "react";
import "./ItemModal.css";

function ItemModal({ selectedCard, onClose, handleDeleteButton }) {
  return (
    <div className="modal">
      <div className="modal__content-card">
        <img className="modal__image" src={selectedCard.link} alt={selectedCard.name} />
        <button className="modal__close-button-image" type="button" onClick={onClose} />
        <div className="modal__info-section-container">
          <div className="modal__info">
            <p className="modal__info-name">{selectedCard.name}</p>
            <p className="modal__info-weather">Weather: {selectedCard.weather}</p>
          </div>
          <button className="modal__delete-button" type="button" onClick={handleDeleteButton}>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
