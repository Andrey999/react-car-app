import React, { Fragment } from 'react';
// import PropTypes from "prop-types";


const DetailsCar = (props   ) => {
   const cars = props.cars;
    return(
        <Fragment>

            <li><span>Model -</span> { cars[0].model }</li>
            <li><span>Year -</span> { cars[0].year }</li>
            <li><span>Owner -</span> { cars[0].owner }</li>
            <a href={cars[0].phone} className="car__detail-phone">{cars[0].phone}</a>

            <div className="car__detail-buttons">
                <button>Show phone</button>
                <button>Buy car</button>
            </div>

        </Fragment>
    )
};
//
// DetailsCar.propTypes = {
//     model: PropTypes.string.isRequired,
//     year: PropTypes.number.isRequired,
//     owner: PropTypes.string.isRequired,
// };

export default DetailsCar;