import React from 'react';

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='container columns'>
          <div className='column'>
            <h4>Customer Service</h4>
            <br />
            <ul>
              <li>
                <a href='!#'>Help Center</a>
              </li>
              <li>
                <a href='!#'>Payment</a>
              </li>
              <li>
                <a href='!#'> Shipping</a>
              </li>
              <li>
                <a href='!#'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className='column'>
            <h4>Company</h4>
            <br />
            <ul>
              <li>
                <a href='!#'>About Us</a>
              </li>
              <li>
                <a href='!#'>Offline Store</a>
              </li>
              <li>
                <a href='!#'>Cooperation</a>
              </li>
            </ul>
          </div>
          <div className='column'>
            <h4>Follow Us</h4>
            <br />
            <ul>
              <li>
                <a href='!#'> Instagram</a>
              </li>
              <li>
                <a href='!#'>Twitter</a>
              </li>
              <li>
                <a href='!'>Facebook</a>
              </li>
            </ul>
          </div>
          <div className='column'>
            <h4>Download</h4>
            <br />
            <ul>
              <li>
                <img src='image/googleStore-AppelStore/Badge App Store.png' alt='' />
              </li>
              <li style={{ margin: '5px' }}>
                <img src='image/googleStore-AppelStore/Badge Google Play.png' alt='' />
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='container'>
          <h2 className='copyright'>ASLIBOOK @2020</h2>
        </div>
      </div>
    </>
  );
}
