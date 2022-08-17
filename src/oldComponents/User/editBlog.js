// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Form, Card } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'



export default function EditBlog() {

    const { id } = useParams();
    const [blog, setBlog] = useState();

    async function fetchData() {
        const { data } = await axios.get(`${process.env.REACT_APP_PORT}/blog/${id}`).catch(function (error) { console.log(error) })
        setBlog(data)
    }

    const updateBlog = async (e) => {
        e.preventDefault()
        const data = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'keyword': blog?.keyword,
            'image': blog?.image
        }
        await axios.put(`${process.env.REACT_APP_PORT}/blog/${id}`, { data })
    }


    useEffect(() => {
        fetchData();
    })
    return (
        <Card style={{ width: '18rem' }}>
            <Form onSubmit={updateBlog}>
                <Card.Img variant="top" src={blog?.image} />
                <Card.Body>
                    <Card.Title>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" defaultValue={blog?.title} />
                        </Form.Group>
                    </Card.Title>
                    <Card.Text>
                        <Form.Group className="mb-3" controlId="content">
                            <Form.Label>Content</Form.Label>
                            <Form.Control type="text" defaultValue={blog?.content} />
                        </Form.Group>
                    </Card.Text>
                    <Card.Text>
                        {/* <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Blog Image URL</Form.Label>
                            <Form.Control type="text" placeholder={blog?.image} />
                        </Form.Group> */}
                    </Card.Text>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Card.Body>
            </Form>
        </Card>
    );
}
