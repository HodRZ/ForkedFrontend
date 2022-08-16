import React from 'react'

class DisplayedInfo extends React.Component {


  render() {

    return (
      <div>
        <hr></hr>
        <p>Welcome to {this.props.name.toUpperCase()} !</p>
        <hr></hr>
      </div>
    )
  }
}

export default DisplayedInfo;