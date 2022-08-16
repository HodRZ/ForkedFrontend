import React from 'react';

class Unsplashimg extends React.Component {
  render() {
    return (

      <img className='img-fluid shadow-4' src={this.props.sourceimg} alt="...." />

    )
  }
}
export default Unsplashimg;