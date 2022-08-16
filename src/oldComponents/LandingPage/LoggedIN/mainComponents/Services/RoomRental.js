import React, { Component } from 'react';
import './RentalCard.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

class CarRental extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roomRental: []
        }
    }
    handleGetCarService = async () => {

        const Data = await axios.get(`${process.env.REACT_APP_PORT}/service?searchQuery=roomRental`).catch(function (error) { console.log(error) });
        this.setState({
            roomRental: Data.data
        })
    }
    componentDidMount() {
        this.handleGetCarService()
    }
    render() {
        return (
            <>
                <section className="cards-primary">
                    <div className="cards-header">
                        <h1>
                            Find A Place To Stay
                        </h1>
                        <p>
                            best places in town
                        </p>
                    </div>
                    <div className="card-container">
                        {this.state.roomRental &&
                            this.state.roomRental.map((items, key) => (
                                <article className="card" key={key}>
                                    {/* <a href={items.href} className="card-details"> */}
                                    <Link to={`/service/${items._id}`} className="card-details">
                                        <img src={items.image} loading="lazy" alt={items.title} className="w-full h-48 rounded-tl-md rounded-tr-md" />
                                        <div className="card-header">
                                            <div className="avatar">
                                                <img src={items.image} alt={items.title} />
                                            </div>
                                            <div className="info">
                                                <span className="author-name">{items.title}</span>
                                                <span className="date">{items.price}</span>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <h3>
                                                {items.title}
                                            </h3>
                                            <p>{items.description}</p>
                                        </div>
                                    </Link>
                                </article>
                            ))
                        }
                    </div>
                </section>
            </>
        );
    }
}

export default CarRental;

