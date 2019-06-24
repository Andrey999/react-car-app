import React, { Component } from 'react';
import SearchCar from './components/SearchCar';
import ViewsCar from './components/ViewsCar';
import ModalCar from './components/ModalCar';
import SuccessCarOrder from './components/SuccessCarOrder';
import LoaderSpiner from './components/LoaderSpiner';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput: '',
            filterInputText: '',
            imageNumber: 0,
            isActiveCar: 0,
            isActivePhone: false,
            isModalOpen: false,
            isOrderSuccess: false,
            itemsToShowCar: 5,
            expanded: false,
            isLoading: true,

            cars: [
                { name: "Audi", model: "A7", owner: "Evgeniy", year: 2019, phone: "+7-907-321-54-67", image: "../../assets/audi-a7.jpg" },
                { name: "Hyundai", model: "Sonata", owner: "Andrey", year: 2018, phone: "+7-929-123-45-67", image: "../../assets/Hyunday-sonata.jpg" },
                { name: "Infinity", model: "FX", owner: "Denis", year: 2017, phone: "+7-109-435-93-41", image: "../../assets/infinity.jpg" },
                { name: "Mercedes", model: "C-klasse", owner: "Vitaliy", year: 2017, phone: "+7-600-554-45-34", image: "../../assets/mercedes-c-klasse.jpg" },
                { name: "Kia", model: "Optima", owner: "Aleksandr", year: 2018, phone: "+7-900-643-89-33", image: "../../assets/kia-optima.jpg" },
                { name: "Honda", model: "Accord", owner: "Denis", year: 2015, phone: "+7-501-644-56-77", image: "../../assets/honda-accord.jpg" },
                { name: "Toyota", model: "Camry", owner: "Denis", year: 2014, phone: "+7-610-998-34-87", image: "../../assets/toyota-camry.jpg" },

            ],
        };
        this.myRef = React.createRef();
    }

  handleSubmit = (event) => {
      event.preventDefault();
      console.log('click');
  };

  //  change input value
  handleChange = (event) => {
    this.setState({
      textInput: event.target.value,
    })
  };

  // change  image  to  click
  handleChangeShowImage = (index) => {
      this.setState({
          imageNumber: index,
          isActiveCar: index,
      })
  };

  //  show  phone
  handlePhoneShow = () => {
      this.setState({ isActivePhone: !this.state.isActivePhone })
  };
  //  show modal
  handleModalOpen = () => {
      this.setState({ isModalOpen: true })
  };

  //  close modal
  handleModalClose = () => {
      this.setState({ isModalOpen: false })
  };

  //  show  success order  card
  handleSuccessOrder = () => {
      this.setState({
          isOrderSuccess: true,
          isModalOpen: false
      })
  };

  //  button  show more
  handleButtonShowMore = () => {
      this.state.itemsToShowCar === 5 ?
          ( this.setState({ itemsToShowCar: this.state.cars.length, expanded: true }) ) :
          (  this.setState({ itemsToShowCar: 5, expanded: false }) )
  };

  //  start  loader
  loaderAsyncCall = () => {
      return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  };

  componentDidMount() {
      // this simulates an async action, after which the component will render the content
      this.loaderAsyncCall().then(() => this.setState({ isLoading: false }));
  }


    render() {
    const { textInput, cars, imageNumber, isActiveCar, isModalOpen, isOrderSuccess, itemsToShowCar, expanded, isLoading } = this.state;

        if(isLoading) { // if your component doesn't have to wait for an async action, remove this block
            return <LoaderSpiner /> ; // render null when app is not ready
        }

        return (
        <div className="wrapper">

            <SearchCar
                textInput={ textInput }
                handleChange={ this.handleChange }
                handleSubmit={ this.handleSubmit }
            />
          <hr/>

          <ViewsCar
              cars={ cars }
              handleChangeShowImage={ this.handleChangeShowImage }
              imageNumber={ imageNumber }
              textInput={ textInput }
              handlePhoneShow={ this.handlePhoneShow }
              isActivePhone={ this.state.isActivePhone }
              isActiveCar={ isActiveCar }
              handleModalOpen={ this.handleModalOpen }
              isModalOpen={ isModalOpen }
              handleButtonShowMore={ this.handleButtonShowMore }
              itemsToShowCar={ itemsToShowCar }
              expanded={ expanded }
          />

            { isOrderSuccess ?  <SuccessCarOrder
                isOrderSuccess={ isOrderSuccess }
                imageNumber={ imageNumber }
                cars={ cars }
            /> : null }

           <ModalCar
                cars={ cars }
                imageNumber={ imageNumber }
                handleModalClose={ this.handleModalClose }
                isModalOpen={ isModalOpen }
                handleSuccessOrder={ this.handleSuccessOrder }
            />

        </div>
    );
  }
}

export default App;






