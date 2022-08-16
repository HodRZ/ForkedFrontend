import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RentalCard.css'

class CarRental extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carData: []
        }
    }
    handleGetCarService = async () => {

        const Data = await axios.get(`${process.env.REACT_APP_PORT}/service?searchQuery=carRental`).catch(function (error) { console.log(error) });
        this.setState({
            carData: Data.data
        })
    }
    componentDidMount() {
        this.handleGetCarService()
    }
    render() {
        return (
            <>

                {this.state.carData &&
                    <>
                        <section className="cards-primary">
                            <div className="cards-header">
                                <h1>
                                    Rent A Car
                                </h1>
                                <p>
                                    Find A Car in the Area
                                </p>
                            </div>
                            <div className="card-container">
                                {
                                    this.state.carData.map((items, key) => (
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


                }
            </>
        );
    }
}

export default CarRental;
