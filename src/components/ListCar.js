import React, { Fragment } from 'react';
import PropTypes from "prop-types";

const ListCar = ({ isActiveCar, handleChangeShowImage, item, index }) => {
    const activeElem = isActiveCar === index ? 'active__car' : '';

    return (
        <Fragment>
            <li onClick={() => handleChangeShowImage(index)} className={activeElem}>{item.name} - {item.model}</li>
        </Fragment>
    )
}

ListCar.propTypes = {
    isActiveCar: PropTypes.number.isRequired,
    handleChangeShowImage: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default ListCar;