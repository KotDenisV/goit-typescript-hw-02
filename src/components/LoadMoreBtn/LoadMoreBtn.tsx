import s from './LoadMoreBtn.module.css';
import React from 'react';

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;