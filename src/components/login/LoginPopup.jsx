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
          <div>
            <h2>Sign in</h2>
            <br />
            <h4>
              or <b>create an accont</b>
            </h4>
          </div>

          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <label className='label'>Email</label>
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
              <label className='label'>Password</label>
              <input className='input' type='password' placeholder='Password' />
              <span className='icon is-small is-left'>
                <i className='fas fa-lock'></i>
              </span>
            </p>
          </div>
        </div>
        <div className='modal-card-foot'>
          <div className='field'>
            <p className='control'>
              <button className='button is-primary'>Sign in</button>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
