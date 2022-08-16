import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from '../data/image-data.json'
import  './gallery.css'

class Gallery extends Component {
     
  render() {

    return (
       
      <div className="cards">
     <Row xs={1} md={4} className="g-4">
      {data.map((item, idx) => (
        <Col>
          <Card className='bg-image hover-zoom card1 img-fluid hover-shadow'>
            <Card.Img  src={item.image_url}/> 
          </Card>
        </Col>
      ))}
    </Row>

      </div>
    );
  }
}

export default Gallery;