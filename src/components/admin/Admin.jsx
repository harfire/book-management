import React from 'react';
import { withRouter } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import dummyResponse from '../../dummy-data/item-product';

const Admin = (props) => {
  return (
    <div className='container'>
      <div className='columns is-gapless'>
        <div className='column is-full'>
          <Breadcrumb />
        </div>
      </div>
      <div className='columns is-variable is-4'>
        <div className='column is-one-fifth'>
          <aside className='menu'>
            <p className='menu-label'>General</p>
            <ul className='menu-list'>
              <li>
                <a href='!#'>Dashboard</a>
              </li>
            </ul>
            <p className='menu-label'>Transactions</p>
            <ul className='menu-list'>
              <li>
                <a href='!#' class='is-active'>
                  Daftar Buku
                </a>
              </li>
              <li>
                <a href='!#'>Promo Buku</a>
              </li>
              <li>
                <a href='!#'>Buku Baru</a>
              </li>
            </ul>
          </aside>
        </div>
        <div className='column'>
          <table className='table is-fullwidth'>
            <thead>
              <tr>
                <th width='10%'>Foto</th>
                <th width='30%'>Judul</th>
                <th width='20%'>Penulis</th>
                <th width='15%'>Harga</th>
                <th width='15%'>Diskon</th>
                <th width='10%'>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyResponse.map((val, i) => (
                <tr>
                  <td>
                    <img src={val.imgurl} alt={val.name} />
                  </td>
                  <td>{val.title}</td>
                  <td>{val.writer}</td>
                  <td>{val.price}</td>
                  <td>{val.discount_price}</td>
                  <td>Ubah</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='is-clearfix'>&nbsp;</div>
    </div>
  );
};

export default withRouter(Admin);
