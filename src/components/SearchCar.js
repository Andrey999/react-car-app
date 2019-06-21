import React, { Fragment } from 'react';
import PropTypes from "prop-types";


const SearchCar = ({ textInput, handleChange, handleSubmit }) => {
    return(
        <Fragment>
            <form onSubmit={ handleSubmit } >
                <h1>Find your car: </h1>
                <input type="text" value={ textInput } onChange={ handleChange } placeholder="Search..." />
            </form>
        </Fragment>
    )
};

SearchCar.propTypes = {
    textInput: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default SearchCar;