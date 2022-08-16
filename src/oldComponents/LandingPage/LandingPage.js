import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Citycomponent from './LoggedIN/mainComponents/Citycomponent';
import MainLoggedOut from './loggedOut/MainLoggedOut';
import Footer from './Footer'
import {
    Routes,
    Route,
    // Link
} from "react-router-dom";
import Blogs from './../Blogs'
import CarRental from './LoggedIN/mainComponents/Services/CarRental'
import TourGuide from './LoggedIN/mainComponents/Services/TourGuide'
import RoomRental from './LoggedIN/mainComponents/Services/RoomRental'

import About from './About'
// import Profile from '../user/Profile';
import UserProfile from '../User/UserProfile';
import BlogPost from '../BlogPost';
import CreateServices from '../CreateServices';
import EditBlog from '../User/editBlog';
import EditService from '../User/editService';
// import Profile from '../user/Profile';
class LandingPage extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <>

                <Routes>
                    <Route path='profile' element={<UserProfile />} />
                    <Route path='profile/blog' element={<BlogPost />} />
                    <Route path='profile/service' element={<CreateServices />} />

                    <Route path='about' element={<About />} />
                    <Route path='blog' element={<Blogs />} />
                    <Route path='blog/:id' element={<EditBlog />} />
                    <Route path='carRental/:id' element={<EditService />} />
                    <Route path='tourGuide/:id' element={<EditService />} />
                    <Route path='roomRental/:id' element={<EditService />} />


                    {
                        !isAuthenticated &&
                        <Route path='/' element={<MainLoggedOut />} />
                    }
                    {isAuthenticated &&
                        <Route path='/' element={<Citycomponent />} >
                            <Route path='/carRental' element={<CarRental />} />
                            <Route path='/tourGuide' element={<TourGuide />} />
                            <Route path='/roomRental' element={<RoomRental />} />
                        </Route>
                    }

                </Routes>
                <Footer />
            </>
        );
    }
}

export default withAuth0(LandingPage);