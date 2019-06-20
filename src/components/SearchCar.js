import React, { Fragment } from 'react';
// import PropTypes from "prop-types";


const SearchCar = (props) => {
    const { textInput } = props.textInput;
    return(
        <Fragment>
            <form onSubmit={ props.handleSubmit } >
                <h1>Find your car: </h1>
                <input type="text" value={ textInput } onChange={ props.handleChange } placeholder="Search..." />
            </form>
        </Fragment>
    )
};

// DetailsCar.propTypes = {
//     model: PropTypes.string.isRequired,
//     year: PropTypes.number.isRequired,
//     owner: PropTypes.string.isRequired,
// };

export default SearchCar;