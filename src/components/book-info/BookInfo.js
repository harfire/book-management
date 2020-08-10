import React, { useState } from 'react';
import ProductDescription from './ProductDescription';
import ProductDetail from './ProductDetail';

const BookInfo = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className='column is-full'>
      <div className='tabs'>
        <ul>
          <li onClick={() => setTabIndex(0)} className={tabIndex === 0 ? 'is-active' : ''}>
            <a href='!#'>Description</a>
          </li>
          <li onClick={() => setTabIndex(1)} className={tabIndex === 1 ? 'is-active' : ''}>
            <a href='!#'>Detail</a>
          </li>
        </ul>
      </div>
      <br />

      {tabIndex === 0 && (
        <div>
          <ProductDescription />
        </div>
      )}

      {tabIndex === 1 && (
        <div>
          <ProductDetail />
        </div>
      )}
    </div>
  );
};

export default BookInfo;
