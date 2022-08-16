import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Citycomponents from './oldComponents/LandingPage/LoggedIN/mainComponents/Citycomponent'
import CarRental from './oldComponents/LandingPage/LoggedIN/mainComponents/Services/CarRental'
import RoomRental from './oldComponents/LandingPage/LoggedIN/mainComponents/Services/RoomRental'
import TourGuide from './oldComponents/LandingPage/LoggedIN/mainComponents/Services/TourGuide'

import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-icxzyxmy.us.auth0.com"
        clientId="NQWKNwO9vR75Iy9yHp6eADo20Ip3wgzI"
        redirectUri={window.location.origin}
      >
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/city' element={<Citycomponents />}>
              <Route path='carRental' element={<CarRental />} />
              <Route path='roomRental' element={<RoomRental />} />
              <Route path='tourGuide' element={<TourGuide />} />
            </Route>
          </Route>

        </Routes >
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
