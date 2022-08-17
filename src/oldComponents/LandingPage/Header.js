import React from 'react';
// import { Outlet } from 'react-router-dom';
// import {
//     MDBNavbar,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBNavbarToggler,
//     MDBContainer,
//     MDBIcon,
//     MDBCollapse,
//     // MDBBtn
// } from 'mdb-react-ui-kit';
// import AuthButtons from './../../user/AuthButtons'
import Navbar from './Navbar'

export default function Header() {

    return (
        <>
            <header>
                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://universes.art/fileadmin/_migrated/gridelement_uploads/00-1-IMG_0972-2000-750-2_01.jpg')", height: '75rem' }}
                >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        <Navbar />

                    </div>
                </div>
            </header>

        </>
    );
}