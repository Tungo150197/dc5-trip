import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StarRating from '../Evaluation/StarRating';

export default class Destination extends Component {

    render() {
        var { destination } = this.props;
        return (
            <div className="col-lg-4 col-md-6">
                <div className="single_place">
                    <div className="thumb">
                        <img src={destination.images} alt="" />
                        <Link to="" className="prise">$500</Link>
                    </div>
                    <div className="place_info">
                        <Link to={"/place/destination/" + destination._id} key={destination._id}><h3> {destination.name}</h3></Link>
                        
                        <div className="rating_days d-flex justify-content-between">
                            <StarRating
                                numberOfStars={5}
                                value={Math.round(destination.rating)}
                                size={10}
                                editing={false}
                            />
                            <span className="d-flex justify-content-center align-items-center">
                                <Link to="">{destination.review} đánh giá</Link>
                            </span>
                            <div className="days">
                                <i className="fa fa-clock-o" />
                                <Link to="">5 Days</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}