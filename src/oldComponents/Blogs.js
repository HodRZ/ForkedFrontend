import "./Blogs.css";
import React, { Component } from 'react';
import axios from 'axios';
import Header from './LandingPage/Header';
import { Link } from 'react-router-dom';


class Blogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogData: []
        }
    }
    getData = async () => {
        const blogData = await axios.get(`${process.env.REACT_APP_PORT}/blog`).catch(function (err) { console.log(err) })
        this.setState({
            blogData: blogData.data
        })

    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <>
                <Header />
                <section className="cards-primary" style={{ gap: '2rem'}}>
                    <div className="cards-header">
                        <h1>
                            Blog
                        </h1>
                        <p>
                            Blogs that are loved by the community. Updated every hour.
                        </p>
                    </div>
                    <div className="card-container">
                        {
                            this.state.blogData.map((items, key) => (
                                <article className="card" key={key}>
                                    {/* <a href={items.href} className="card-details"> */}
                                    <Link to={`/blog/${items._id}`} className="card-details">
                                        <img src={items.image} loading="lazy" alt={items.title} className="w-full h-48 rounded-tl-md rounded-tr-md" />
                                        <div className="card-header">
                                            <div className="avatar">
                                                <img src={items.image} alt={items.title} />
                                            </div>
                                            <div className="info">
                                                <span className="author-name">{items.title}</span>
                                                <span className="date">{items.date}</span>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <h3>
                                                {items.title}
                                            </h3>
                                            <p>{items.content}</p>
                                        </div>
                                    </Link>
                                </article>
                            ))
                        }
                    </div>
                </section>
            </>
        )

    }
}

export default Blogs;