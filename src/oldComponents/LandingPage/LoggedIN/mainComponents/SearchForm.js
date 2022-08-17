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

        <MDBRow onSubmit={this.handelSubmit} tag='form' className=' align-items-center'>
          <MDBCol >
            <MDBInput id='form1' placeholder="lets go" />
          </MDBCol>

          <MDBCol size='auto' style={{ marginTop: '2vh' }}>
            <MDBBtn type='submit' className='btn btn-warning  btn-lg' style={{ backgroundColor: 'white', fontWeight: "bold", color: 'orange' }}>Search</MDBBtn>
          </MDBCol>
        </MDBRow>
      </>
    )
  }
} export default SearchForm;

