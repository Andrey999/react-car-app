import React, { Fragment } from 'react';
import PropTypes from "prop-types";


const DetailsCar = ({ cars, imageNumber, handlePhoneShow, isActivePhone, handleModalOpen }) => {
    return(
        <Fragment>

            <li>Model - <strong>{ cars[imageNumber].model }</strong></li>
            <li>Year - <strong>{ cars[imageNumber].year }</strong></li>
            <li>Owner - <strong>{ cars[imageNumber].owner }</strong></li>
            <a href={cars[imageNumber].phone} className={ isActivePhone ? 'car__detail-phone active__phone' : 'car__detail-phone' }>{cars[imageNumber].phone}</a>

            <div className="car__detail-buttons">
                <button onClick={ handlePhoneShow }>Show phone</button>
                <button onClick={ handleModalOpen }>Buy car</button>
            </div>

        </Fragment>
    )
};

DetailsCar.propTypes = {
    cars: PropTypes.array.isRequired,
    imageNumber: PropTypes.number.isRequired,
    handlePhoneShow: PropTypes.func.isRequired,
    isActivePhone: PropTypes.bool.isRequired,
    handleModalOpen: PropTypes.func.isRequired,
};

export default DetailsCar;