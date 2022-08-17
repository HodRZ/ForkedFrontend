import SearchForm from './SearchForm';
import Weather from './Weather';
import Map from './Map';
// import DisplayedInfo from './DisplayedInfo';
import Unsplashimg from './Unsplashimg';
import { Component } from 'react';
import axios from 'axios';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import Header from '../../loggedOut/Header';
// import LogoutButton from '../../../user/LogoutButton';
import { MDBCol, MDBContainer } from 'mdb-react-ui-kit';
// import Profile from './../../../user/Profile';
import UseServices from '../../../UseServices';
import Header from '../../Header';
// import { Route, Routes } from 'react-router-dom';
// import UserProfile from '../../../User/UserProfile';
// import AboutUS from '../../About';
// import Blogs from './../../../Blogs'
import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {
	MDBCard,
	MDBCardTitle,
	MDBCardText,
	MDBCardBody,
	MDBRow,
} from 'mdb-react-ui-kit';

class Citycomponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cityName: '',
			latitude: '',
			longitude: '',
			imgSrc: '',
			showData: false,
			showErr: false,
			weather: [],
			showWeather: false,

		}
	}

	displayLocation = async (event) => {
		event.preventDefault();
		const userInput = event.target.form1.value;
		const requestUrl = `${process.env.REACT_APP_PORT}/city?searchQuery=${userInput}`;
		const serverData = await axios.get(requestUrl);
		this.setState({

			cityName: userInput,
			latitude: serverData.data.lat,
			longitude: serverData.data.lon,
			imgSrc: serverData.data.map,
			imgSrcUns: serverData.data.cityImg,
			showData: true,
			showErr: false,
			weather: serverData.data.weatherForecast,
			showWeather: true,

		})
	}
	createUser = async () => {
		const newUser = {
			name: this.props.auth0.user.name,
			email: this.props.auth0.user.email,
			image: this.props.auth0.user.picture
		}

		const found = await axios.post(`${process.env.REACT_APP_PORT}/user`, newUser).catch(function (error) { console.log(error) })
		console.log(found)
	}
	componentDidMount() {
		this.createUser()
	}
	render() {
		return (
			<>
				<Header />

				<div
					className='  d-flex align-items-center'
					style={{ height: 'auto', minHeight: '25rem' ,width:'80%', margin:'auto' }}
				>
					<h1>Search For your faviort City</h1>
					<MDBContainer style={{ width: '100%' }} >
						
						<MDBRow>
							<MDBCol >
								<SearchForm display={this.displayLocation} />
							</MDBCol>
						</MDBRow>

						{this.state.showData &&
							<>
								<MDBRow  >
									<MDBCard style={{ width: '50%', marginTop: '4vh', padding: "10px", backgroundColor:'orange' }} background='warning' >
										<MDBRow  >
											<MDBCol md='9' style={{ marginLeft: '25vh' }}>
												<Map source={this.state.imgSrc} style={{ marginTop: '2vh' }} />
											</MDBCol>
											<MDBCol md='5'>
												<MDBCardBody>
													<MDBCardTitle style={{ color: 'white', marginTop: '8vh' }}>
														<h2 style={{ display: 'inline-block',color: 'white' }}>{this.state.cityName} city map</h2>
														.
														Thanks For searching with our tool We thought that you might want to see some pics of the city and why not seeing the weather too
													</MDBCardTitle>
													<MDBCardText  style={{ fontWeight: 'bold', color: 'white' }}>
														<small >Last updated 3 mins ago</small>
													</MDBCardText>
												</MDBCardBody>
											</MDBCol>
										</MDBRow>
									</MDBCard>

									<MDBCol md='3' style={{ marginTop: '-100vh' ,  marginLeft:'120vh' }} >
										<Weather weatherData={this.state.weather} />
									</MDBCol>
								</MDBRow>
								<MDBRow>
									<MDBCard style={{ marginLeft: '70vh', width: '60%', marginTop: '4vh', padding: "10px", float: 'right', backgroundColor:'orange'  }} background='warning' >
										<MDBRow  >
											<MDBCol md='6' style={{ marginLeft: '50vh', float: 'right' }}>

											</MDBCol>
										</MDBRow>
									</MDBCard>
								</MDBRow>

								<MDBCard style={{ width: '60%', margin: "auto", marginTop: '0vh', padding: "10px" ,  backgroundColor:'orange' }} background='warning' >
									<MDBRow  >
										<MDBCol md='6' style={{ marginLeft: '4vh', borderRadius: '10px' , marginTop: '-50vh',color: 'white'  }}>
											<Unsplashimg style={{ marginLeft: '10vh', borderRadius: '10px', color:'white' }} sourceimg={this.state.imgSrcUns} />
										</MDBCol>
										<MDBCol md='5'>
											<MDBCardBody>
												<MDBCardTitle color='white' style={{ color: 'white'  , marginTop:'-40vh' , marginLeft:'-40vh'}}>
													<h2 style={{ display: 'inline-block', color: 'white'  }}> Some {this.state.cityName}'s  Views </h2>
													<p style={{ display: 'inline-block', color: 'white'  }}>is one of the most pretty cities in the area with its amaizing views</p>
												</MDBCardTitle>
											</MDBCardBody>
										</MDBCol>
									</MDBRow>
								</MDBCard>
								<MDBRow style={{ marginTop: '4vh', padding: "10px" , width:'100%' , }} background='warning' >
									<UseServices />
								</MDBRow>
							</>}
					</MDBContainer>
					{this.state.showErr && <p>Enter valid Value Please</p>}
				</div>
			</>

		)
	}
} export default withAuth0(Citycomponent);

