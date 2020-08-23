import React from 'react';
import { withRouter } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import BookInfo from '../../components/book-info/BookInfo';
import dummyResponse from '../../dummy-data/item-product';
import Listbook from '../../components/listbook/Listbook';

const BookDetail = (props) => {
  return (
    <div className='container'>
      <div className='columns is-gapless'>
        <div className='column is-full'>
          <Breadcrumb />
        </div>
      </div>
      <div className='columns is-gapless'>
        <div className='column'>
          <img className='book-detail-image' src={`${process.env.PUBLIC_URL}/image/listBook/2.png`} alt='' />
        </div>
        <div className='column'>
          <h3 className='is-size-1'>Steal Like an Artist</h3>
          <h3 className='is-size-4'>Austin Kleon</h3>
          <hr />
          <div className='columns is-gapless'>
            <div className='column is-4 has-text-weight-bold'>Quantity</div>
            <div className='column'>
              <input type='number' className='input qty' />
              <span className='m-l-10'>6 peace available</span>
            </div>
          </div>
          <div className='columns is-gapless'>
            <div className='column is-4 has-text-weight-bold'>Shipping Charges</div>
            <div className='column'>
              <div className='select'>
                <select className='has-text-weight-bold'>
                  <option>Jakarta,Cengkareng</option>
                  <option>Jakarta,lenteng agung</option>
                </select>
              </div>
              <div className='m-t-10'>
                from Surabaya <br />
                Fee Rp 15.000-Rp 24.000
              </div>
            </div>
          </div>
          <div className='columns is-gapless'>
            <div className='column'>
              <button className='button margin-r-20'>
                <span className='icon'>
                  <i className='fas fa-heart'></i>
                </span>
              </button>
              <button className='button margin-r-20 is-outlined'>add to cart</button>
              <button className='button is-primary'>buy now</button>
            </div>
          </div>
        </div>
      </div>

      <div className='columns is-gapless'>
        <BookInfo />
      </div>

      <div className='columns'>
        {dummyResponse.map((val, i) => {
          return <Listbook key={`related-book-${i}`} imgurl={val.imgurl} title={val.title} writer={val.writer} price={val.price} />;
        })}
      </div>

      <div className='is-clearfix'>&nbsp;</div>
    </div>
  );
};

export default withRouter(BookDetail);
