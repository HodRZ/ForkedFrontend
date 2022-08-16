import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Citycomponent from '../oldComponents/LandingPage/LoggedIN/mainComponents/Citycomponent';

class City extends Component {
    render() {
        return (
            <>
                <Citycomponent />
                <Outlet />
            </>
        );
    }
}

export default City;