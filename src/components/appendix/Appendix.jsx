import React from 'react';
import Appendixitem from './Appendixitem';

const Appendix = () => {
  const menus = [
    { key: 'A', values: ['Art', 'Animal Husbandry', 'Aquaculture', 'Agriculture', 'Architecture'] },
    { key: 'B', values: ['Business'] },
    { key: 'C', values: ['Computer', 'Comic', 'Culture', 'Cookbook'] },
    { key: 'F', values: ['Family', 'Finance'] },
    { key: 'H', values: ['History'] },
    { key: 'L', values: ['Law', 'Life Style'] },
    { key: 'M', values: ['Medical', 'Music', 'Mathematics'] },
    { key: 'N', values: ['Novel'] },
    { key: 'P', values: ['Physics', 'Psychology'] },
    { key: 'R', values: ['Religion'] },
    { key: 'S', values: ['Sports', 'Self Development', 'Social Sciences'] },
  ];
  return (
    <div className='appendix-parent'>
      {menus.map((m, i) => {
        return <Appendixitem key={`category-book-${i}`} title={m.key} values={m.values} />;
      })}
    </div>
  );
};

export default Appendix;
