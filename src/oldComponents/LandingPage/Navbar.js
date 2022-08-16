import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  // MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import AuthButtons from '../user/AuthButtons';
import { Link } from 'react-router-dom';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='transparent'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse show='true'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBBtn color='dark'><Link to='/' style={{ textDecoration: "none", color: 'white' }}>Home</Link></MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBBtn color='dark'><Link to='/profile' style={{ textDecoration: "none", color: 'white' }}>Profile</Link></MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBBtn color='dark'><Link to='/blog' style={{ textDecoration: "none", color: 'white' }}>Blogs</Link></MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBBtn color='dark'><Link to='/about' style={{ textDecoration: "none", color: 'white' }}>About Us</Link></MDBBtn>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <AuthButtons />
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}