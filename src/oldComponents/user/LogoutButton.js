
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { MDBBtn } from 'mdb-react-ui-kit';

function LogoutButton() {
    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    return isAuthenticated && (
        <MDBBtn onClick={() => {
            logout({ returnTo: window.location.origin });
        }} color='light'>Log Out</MDBBtn>

    );
}

export default LogoutButton;