import React, { } from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import AuthButtons from './../../user/AuthButtons'
export default function Splash() {
    // const [showBasic, setShowBasic] = useState(false);

    return (
        <div
            className='p-5 text-center bg-image d-flex align-items-center'
            style={{ backgroundColor: 'orange', height: '400px' }}
        >
            {/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}> */}
            <MDBContainer fluid>
                {/* <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'> */}

                <MDBRow className='align-items-center'>
                    <MDBCol >
                        <h1 className='mb-3'>Plan Your Trip</h1>
                        {/* <h4 className='mb-3'>Join Us So We Can Help</h4> */}
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol >
                        <AuthButtons />
                    </MDBCol>
                </MDBRow>
                {/* </div>
                </div> */}
            </MDBContainer>
        </div>
        // </div>

    );
}