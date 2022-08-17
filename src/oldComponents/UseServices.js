import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom';
// import ShowCard from './ShowCard';
import {
	MDBBtn,
	MDBBtnGroup,
	// MDBTabsContent,
	// MDBTabsPane
} from 'mdb-react-ui-kit';



export class UseServices extends Component {
	render() {
		return (
			<>
				<MDBBtnGroup size='lg' style={{ marginLeft:'50vh'}}>
					<MDBBtn color='warning'><Link to='carRental' style={{ textDecoration: "none", color: 'white' }}>Rent a Car</Link></MDBBtn>
					<MDBBtn color='warning'><Link to='tourGuide' style={{ textDecoration: "none", color: 'white'}}  >Find a Tour Guide</Link></MDBBtn>
					<MDBBtn color='warning'><Link to='roomRental' style={{ textDecoration: "none", color: 'white' }}>Find a Place to Stay</Link></MDBBtn>
				</MDBBtnGroup>
				<Outlet />
			</>
		);
	}
}


export default UseServices



