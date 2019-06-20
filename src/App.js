import React, { Component } from 'react';
import SearchCar from './components/SearchCar';
import ViewsCar from './components/ViewsCar';
import './App.css';


class App extends Component {

  state = {
    textInput: '',
    imageNumber: 0,
    cars: [
      { name: "Hyundai", model: "Sonata", owner: "Andrey", year: 2018, phone: "+7-929-123-45-67", image: "../../assets/Hyunday-sonata.jpg" },
      { name: "Audi", model: "A7", owner: "Evgeniy", year: 2019, phone: "+7-907-321-54-67", image: "../../assets/audi-a7.jpg" },
      { name: "Porche", model: "Cayene", owner: "Anatoliy", year: 2016, phone: "+7-300-123-88-67", image: "../../assets/Porsche-сayenne.jpg" },
      { name: "Mercedes", model: "C-klasse", owner: "Vitaliy", year: 2017, phone: "+7-600-554-45-34", image: "../../assets/mercedes-c-klasse.jpg" },
      { name: "Kia", model: "Rio", owner: "Aleksandr", year: 2017, phone: "+7-900-643-89-33", image: "../../assets/kia-rio.jpg" },
      { name: "Chevrolet", model: "Aveo", owner: "Denis", year: 2016, phone: "+7-409-435-90-90", image: "../../assets/chevrolet-aveo.jpg" },
    ],
  };

  handleSubmit = () => {
    console.log('click');
  };

  handleChange = (event) => {
    this.setState({
      textInput: event.target.value
    })
  };

  handleChangeShowImage = (index) => {
      console.log(index)
  };

  render() {
    const { textInput, cars, imageNumber } = this.state;
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
          />
        </div>
    );
  }
}

export default App;






