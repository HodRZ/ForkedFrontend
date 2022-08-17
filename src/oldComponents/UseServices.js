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
				<MDBBtnGroup size='lg'  style={{ marginLeft:'50vh' }}>
					<MDBBtn  style={{  backgroundColor: 'white' , border:'2px solid orange' }}><Link to='carRental' style={{  color: 'orange' , fontWeight:'bold'  }}>Rent a Car</Link></MDBBtn>
					<MDBBtn style={{  backgroundColor: 'white' , border:'2px solid orange'  }}><Link to='tourGuide' style={{ color: 'orange', fontWeight:'bold'  }}  >Find a Tour Guide</Link></MDBBtn>
					<MDBBtn style={{  backgroundColor: 'white' , border:'2px solid orange'  }}><Link to='roomRental' style={{  color: 'orange' , fontWeight:'bold'  }}>Find a Place to Stay</Link></MDBBtn>
				</MDBBtnGroup>
				<Outlet />
			</>
		);
	}
}


export default UseServices



