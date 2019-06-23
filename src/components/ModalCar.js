import React from 'react';
import PropTypes from "prop-types";

const ModalCar = ({ cars, imageNumber, handleModalClose, isModalOpen, handleSuccessOrder }) => {
    return (
        <div className={ isModalOpen ? 'modalBackdrop modalBackdrop-active' : 'modalBackdrop' }>

            <div className="cars__modal">

                <div className="cars__title">
                    <h2>Do you want by this car?</h2>
                    <span onClick={ handleModalClose }>X</span>
                </div>
                
                <ul className="cars__modal-items">
                    <li>Your car - <strong>{ cars[imageNumber].name }</strong></li>
                    <li>Model - <strong>{ cars[imageNumber].model }</strong></li>
                    <li>Year - <strong>{ cars[imageNumber].year }</strong></li>
                    <li>Owner - <strong>{ cars[imageNumber].owner }</strong></li>
                </ul>
                
                <div className="car__modal-buttons">
                    <button onClick={ handleSuccessOrder }>Buy</button>
                    <button onClick={ handleModalClose }>Cancel</button>
                </div>
            </div>

        </div>
    )
};

ModalCar.propTypes = {
    cars: PropTypes.array.isRequired,
    imageNumber: PropTypes.number.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    handleSuccessOrder: PropTypes.func.isRequired,
};

export default ModalCar;