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
            <MDBInput id='form1'placeHolder="City name goes here :)" />
          </MDBCol>

          <MDBCol size='auto' style={{marginTop:'2vh'}}>
            <MDBBtn type='submit'  className='btn btn-warning  btn-lg' style={{backgroundColor:'white' , fontWeight:"bold", color:'orange'}}>Searh</MDBBtn>
          </MDBCol>
        </MDBRow>
      </>
    )
  }
} export default SearchForm;

