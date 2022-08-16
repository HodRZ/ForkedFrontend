import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit'
import react from 'react'

class Weather extends react.Component {

  render() {
    return (
      < MDBCard >
        <MDBCardBody>
          <MDBCardTitle>Weather Information</MDBCardTitle>
          {this.props.weatherData.map((item, i) => {
            if (i < 7) {
              return (
                <>
                  <MDBCardText>
                    {item.date} : {item.description}
                  </MDBCardText>
                </>)
            } else return ''
          })}
        </MDBCardBody>
      </MDBCard >
    )
  }
}

export default Weather

  // < MDBCard >
  // <MDBCardBody>
  //   <MDBCardTitle>Weather Information</MDBCardTitle>
  //   <MDBCardText>
  //     {item.date} : {item.description}
  //   </MDBCardText>
  // </MDBCardBody>
  //   </MDBCard >