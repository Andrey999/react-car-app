import React, { Component } from 'react';
import PropTypes from "prop-types";

class SuccessCarOrder extends Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
    }

    hideSuccessOrder = () => {
            this.myRef.current.remove();
    };

    componentDidMount() {
        this.hideOrder = setTimeout(() => this.hideSuccessOrder(), 8000);
    }

    componentWillUnmount() {
        clearTimeout(this.hideOrder);
    }
    render() {
        const { cars, imageNumber } = this.props;

        return(
            <div className="success__order" ref={ this.myRef }>
                <p>Success order: { cars[imageNumber].name } { cars[imageNumber].model } - {   new Date().toLocaleString() } </p>
            </div>
        );
    }
}

SuccessCarOrder.propTypes = {
    cars: PropTypes.array.isRequired,
    imageNumber: PropTypes.number.isRequired,
};

export default SuccessCarOrder;