import React from 'react';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <p className={s.notFound}>Sorry, page is not found...</p>
    </div>
  );
};

export default NotFoundPage;