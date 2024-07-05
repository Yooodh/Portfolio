import React from 'react';
import './Loading.css';

// Import Images
import LoadingImg from '../../assets/images/Loading.gif';

const Loading = ({ theme }) => {
  return (
    <div className={`loadingContainer ${theme === 'dark' ? 'dark' : 'light'}`}>
      <img src={LoadingImg} alt='loading' />
    </div>
  );
};

export default Loading;
