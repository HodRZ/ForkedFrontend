import React, { Component } from 'react';
// import './BlogPost.css'


import {
    MDBInput,
    MDBBtn,
    MDBTextArea
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Header from './LandingPage/Header';


class BlogPost extends Component {
    handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            'newBlog': {
                'title': e.target.title.value,
                'keyword': e.target.keyword.value,
                'image': e.target.image.value,
                'content': e.target.content.value
            }
        };
        await axios.post(`${process.env.REACT_APP_PORT_URL}/blog`, data).catch(function (error) { console.log(error) })


    }

    render() {
        return (
            <>
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <div className="website-url-input">

                        <div className="input-container">
                            <div className="website-protocol">
                                Title
                            </div>
                            <input
                                type="text"

                                name="title"
                                className="input"
                            />
                        </div>
                    </div>

                    <div className="website-url-input">
                        <div className="input-container">
                            <div className="website-protocol">
                                City Name
                            </div>
                            <input
                                name='keyword'
                                type="text"
                                placeholder="input title"

                                className="input"
                            />
                        </div>
                    </div>
                    <div className="website-url-input">

                        <div className="input-container">
                            <div className="website-protocol">
                                imageURL
                            </div>
                            <input
                                type="text"
                                placeholder="input title"
                                name='image'
                                className="input"
                            />
                        </div>
                    </div>
                    <MDBTextArea label='Message' id='content' rows={4} />
                    <input type='submit'
                        className="btn-primary-sm"
                    />


                </form>
            </>
        );
    }


}
export default BlogPost;