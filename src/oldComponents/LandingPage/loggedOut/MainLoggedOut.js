import React, { Component } from 'react';
import Header from '../Header';
import Splash from './Splash';

class MainLoggedOut extends Component {
    render() {
        return (
            <>
                <Header />
                <Splash />
            </>
        );
    }
}

export default MainLoggedOut;