import { ProgressBar } from 'react-loader-spinner';
import s from './Loader.module.css';
import React from 'react';
import { string } from 'yup';

const Loader: React.FC = () => {
    return (
      <div className={s.wrapper}>
        <ProgressBar
          visible={true}
          height="80"
          width="80"
          // color="#4fa94d"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>);
}

export default Loader;