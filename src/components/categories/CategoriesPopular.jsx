import React from 'react';

export default function CategoriesPopular(props) {
  return (
    <>
      <div className=' rectangle-85 column'>
        <h3 className='self-Development'>{props.category}</h3>

        <br />
        <img className='line' src={props.line} alt={props.category} />
      </div>
    </>
  );
}
