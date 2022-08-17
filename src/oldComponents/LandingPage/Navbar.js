
// import { Navbar, NavItem } from "react-bootstrap";
import React from "react";
// import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";



function Navbar(props) {
  const {
    isAuthenticated,
    logout } = useAuth0();
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <Link to='/'>
            <a className='navbar-brand' href='#page-top'>
              YallaJo
            </a></Link>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                <Link to='/blog' style={{ textDecoration: "none", color: 'black' }}>
                  Blogs
                </Link>
              </a>
            </li>
            {/* <li>
              <a href='#features' className='page-scroll'>
                <Link to='/profile' style={{ textDecoration: "none", color: 'black' }}>
                  Profile
                </Link>
              </a>
            </li> */}

            {
              isAuthenticated && (
                <li>
                  <a onClick={() => {
                    logout({ returnTo: window.location.origin });
                  }}>Log out</a></li>)
            }

          </ul>
        </div>
      </div>
    </nav >
  )
}
export default Navbar




