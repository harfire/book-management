import React from 'react';
import classNames from 'classnames';

const Login = (props) => {
  const isActive = props.modal ? 'is-active' : '';

  return (
    <React.Fragment>
      <div className={classNames('modal', isActive)}>
        <div className='modal-background'></div>
        <div className='modal-content'>
          <button className='modal-close is-large' aria-label='close'></button>

          <div className='field'>
            <h1 className='is-size-3 m-b-20'>Login</h1>
            <p className='control has-icons-left has-icons-right'>
              <input className='input' type='email' placeholder='Email' />
              <span className='icon is-small is-left'>
                <i className='fas fa-envelope'></i>
              </span>
              <span className='icon is-small is-right'>
                <i className='fas fa-check'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control has-icons-left'>
              <input className='input' type='password' placeholder='Password' />
              <span className='icon is-small is-left'>
                <i className='fas fa-lock'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <a href='http://localhost:3000/admin' className='button is-success'>
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
