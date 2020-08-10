import React from 'react';

const Appendixitem = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.values.map((v, i) => {
        return (
          <React.Fragment key={`category-book-item-${i}`}>
            <a href='!#'>{v}</a>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Appendixitem;
