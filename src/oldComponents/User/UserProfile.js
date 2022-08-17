import React from "react";
// import axios from "axios";
import {
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import { withAuth0 } from '@auth0/auth0-react';
import Header from "../LandingPage/Header";
import { Link } from "react-router-dom";

class UserProfile extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profileData: {},
  //     user: this.props.auth0.user
  //   };
  // }

  // getData = async () => {
  //   const responseData = await axios
  //     .get(`$(process.env.REACT_APP_PORT}/user?email=${this.state.user.email}`) //params to be extracted and added here
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  //   this.setState({
  //     profileData: responseData.data,
  //   });
  // };
  // componentDidMount() {
  //   this.getData();
  // }
  render() {
    const { user } = this.props.auth0;
    // console.log(this.state.user)
    return (
      <>
        <Header />
        <MDBContainer className="h-50">
          <MDBRow>
            <MDBCol md='8'>
              <MDBCardImage src='https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png' className="h-25" style={{ height: '25rem' }} alt="..." />
              <MDBRow>
                <MDBCol md='6'>
                  <MDBBtn color='dark'><Link to='service' style={{ textDecoration: "none", color: 'black' }}>Offer Service</Link></MDBBtn>
                </MDBCol>
                <MDBCol md='6'>
                  <MDBBtn color='dark'><Link to='blog' style={{ textDecoration: "none", color: 'black' }}>Write a Blog</Link></MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBRow>
              <MDBCol md='4'>
                <MDBCardTitle style={{ marginTop: '15rem' }}>Welcome {user.name} !</MDBCardTitle>
              </MDBCol>
            </MDBRow>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
export default withAuth0(UserProfile);
// {true &&

//   <MDBCard>
//     <MDBRipple
//       rippleColor="light"
//       rippleTag="div"
//       className="bg-image hover-overlay"
//     >
//       <MDBCardImage src='https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png' fluid alt="..." />
//       <a href='/'>
//         <div
//           className="mask"
//           style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//         ></div>
//       </a>
//     </MDBRipple>
//     <MDBCardBody>
//       <MDBCardTitle>Welcome {user.name} !</MDBCardTitle>
//       {/* <MDBCardText>
//             Some quick example text to build on the card title and make
//             up the bulk of the card's content.
//           </MDBCardText> */}
//       <MDBBtn href="#">Add Service</MDBBtn>
//       <MDBBtn href="#">Add Artical</MDBBtn>
//     </MDBCardBody>
//   </MDBCard>

// }