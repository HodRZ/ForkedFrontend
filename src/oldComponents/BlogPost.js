import React, { Component } from 'react';


import {
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Header from './LandingPage/Header';


class BlogPost extends Component {
    handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            'newArticle': {
                'title': e.target.title.value,
                'keyword': e.target.keyword.value,
                'image': e.target.image.value,
                // 'content': e.target.content.value
            }
        };

        await axios.post(`${process.env.REACT_APP_PORT}/blog`, data).catch(function (error) { console.log(error) })


    }

    render() {
        return (
            <>
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <MDBInput id='title' wrapperClass='mb-4' label='Title' />
                    <MDBInput id='keyword' wrapperClass='mb-4' label='City Name' />
                    <MDBInput id='image' wrapperClass='mb-4' label='Image URL' />
                    {/* <MDBInput wrapperClass='mb-4' textarea id='content' rows={4} label='Content' /> */}

                    <MDBBtn type='submit' className='mb-4' block>
                        submit
                    </MDBBtn>
                </form>
            </>
        );
    }


}
export default BlogPost;