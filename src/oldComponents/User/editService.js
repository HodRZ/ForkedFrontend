// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Form, Card } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'



export default function EditService() {

    const { id } = useParams();
    const [service, setService] = useState();

    async function fetchData() {
        const { data } = await axios.get(`${process.env.REACT_APP_PORT}/service/${id}`).catch(function (error) { console.log(error) })
        setService(data)
    }

    const updateService = async (e) => {
        e.preventDefault()
        const data = {
            'title': e.target.title.value,
            'description': e.target.description.value,
            'image': service?.image,
            'isAvailable': true,
            'price': e.target.price.value
        }
        await axios.put(`${process.env.REACT_APP_PORT}/service/${id}`, { data })
    }


    useEffect(() => {
        fetchData();
    })
    return (
        <Card style={{ width: '18rem' }}>
            <Form onSubmit={updateService}>
                <Card.Img variant="top" src={service?.image} />
                <Card.Body>
                    <Card.Title>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder={service?.title} />
                        </Form.Group>
                    </Card.Title>
                    <Card.Text>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder={service?.description} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder={service?.price} />
                        </Form.Group>
                    </Card.Text>
                    <Card.Text>

                    </Card.Text>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Card.Body>
            </Form>
        </Card>
    );
}
