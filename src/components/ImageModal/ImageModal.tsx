import Modal from 'react-modal';
import s from './ImageModal.module.css';
import React, { useEffect } from 'react';
import { UnsplashImage } from '../App/App.types';

interface ImageModalProps {
  image: UnsplashImage | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}      
    >
      <div onKeyDown={handleKeyDown} tabIndex={0}>
        <button className={s.closeButton} onClick={onClose}>Close</button>
        {image && (
          <img src={image.urls.full} alt={image.alt_description} className={s.image} />
          )}
      </div>
    </Modal>
  );
}

export default ImageModal;