import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { MDBBtn } from 'mdb-react-ui-kit';

function LoginButton() {
    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();

    return !isAuthenticated && (
        <MDBBtn color='light' onClick={loginWithRedirect}>Log in </MDBBtn>

    );
}

export default LoginButton;