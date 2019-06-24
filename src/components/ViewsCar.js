import React, { Component } from 'react';
import DetailsCar from './DetailsCar';
import ListCar from './ListCar';
import PropTypes from 'prop-types';

class ViewsCar extends Component {
    render() {
        const { cars, textInput, imageNumber, isActiveCar, handleChangeShowImage, handlePhoneShow, isActivePhone, handleModalOpen, handleButtonShowMore, itemsToShowCar, expanded } = this.props;
        const image  = this.props.cars;
        const name  = this.props.cars;

        const filterInputText = cars.filter(item => item.name.toUpperCase().indexOf(textInput) > -1 ||
                                            item.name.toLowerCase().indexOf(textInput) > -1 ||
                                            item.model.toUpperCase().indexOf(textInput) > -1 ||
                                            item.model.toLowerCase().indexOf(textInput) > -1);

        const carModelList = filterInputText.slice(0, itemsToShowCar).map((item, index) =>
            <ListCar
                key={index}
                index={index}
                item={item}
                handleChangeShowImage={handleChangeShowImage}
                isActiveCar={isActiveCar}
            /> );

        return (
            <div className="viewsCar__wrap">
                <ul className="car__list">
                    { carModelList }

                    <span onClick={ handleButtonShowMore }>{ expanded ? 'Show less': 'Show more'}</span>
                </ul>

                <div className="car__image">
                    <h2>{ name[imageNumber].name }</h2>
                    <img src={ image[imageNumber].image } alt={ image[imageNumber].image } />
                </div>

                <div className="car__detail">
                    <ul className="car__detail-list">
                        <DetailsCar
                            cars={cars}
                            imageNumber={imageNumber}
                            handlePhoneShow={ handlePhoneShow }
                            isActivePhone={ isActivePhone }
                            handleModalOpen={ handleModalOpen }
                        />
                    </ul>
                </div>
            </div>
        );
    }
}

ViewsCar.propTypes = {
    cars: PropTypes.array.isRequired,
    textInput: PropTypes.string.isRequired,
    imageNumber: PropTypes.number.isRequired,
    handleChangeShowImage: PropTypes.func.isRequired,
    handlePhoneShow: PropTypes.func.isRequired,
    isActivePhone: PropTypes.bool.isRequired,
    isActiveCar: PropTypes.number.isRequired,
    handleModalOpen: PropTypes.func.isRequired,
    itemsToShowCar: PropTypes.number.isRequired,
    expanded: PropTypes.bool.isRequired,
    handleButtonShowMore: PropTypes.func.isRequired,
};

export default ViewsCar;