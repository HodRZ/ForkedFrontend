import React from 'react';

import {
  MDBInput,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';



class SearchForm extends React.Component {
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.display(e);


  }

  render() {
    return (
      <>

        <MDBRow onSubmit={this.handelSubmit} tag='form' className='gy-2 gx-3 align-items-center'>
          <MDBCol >
            <MDBInput id='form1' label='Enter city name' />
          </MDBCol>

          <MDBCol size='auto'>
            <MDBBtn type='submit'  className='btn btn-warning btn-lg' >Searh</MDBBtn>
          </MDBCol>
        </MDBRow>
      </>
    )
  }
} export default SearchForm;

