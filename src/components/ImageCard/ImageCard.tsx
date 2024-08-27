import React from 'react';
import s from './ImageCard.module.css';

interface ImageCardProps {
  imgUrl: string;
  alt: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imgUrl, alt, onClick }) => {
    
    return (
      <li className={s.listItem}>
        <img className={s.listImage} src={imgUrl} alt={alt} onClick={onClick} />
      </li>
    );
}

export default ImageCard;