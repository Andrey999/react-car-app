import React, { Component } from 'react';
import DetailsCar from './DetailsCar';
// import PropTypes from 'prop-types';

class ViewsCar extends Component {
    render() {

        const image = this.props.cars;
        const imageNumber = this.props;
        const carModelList = this.props.cars.map((item, index) =>
            <li key={index} onClick={() => this.props.handleChangeShowImage(index)}>{item.name} - {item.model}</li> );

        return (
            <div className="viewsCar__wrap">
                <ul className="car__list">
                    { carModelList }
                </ul>

                <div className="car__image">
                    <img src={ image[imageNumber].image } alt="" />
                </div>

                <div className="car__detail">
                    <ul className="car__detail-list">
                        <DetailsCar cars={this.props.cars} />
                    </ul>
                </div>
            </div>
        );
    }
}

// ViewsCar.propTypes = {
//     name: PropTypes.string.isRequired,
//     model: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
// };


export default ViewsCar;






