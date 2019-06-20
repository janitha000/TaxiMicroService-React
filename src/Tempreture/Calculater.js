import React from 'react';
import TempretureInput from './TempretureInput'

class Calculater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempreture: '',
            scale: 'c'
        }
        this.handleCelChange = this.handleCelChange.bind(this);
        this.handleFarChange = this.handleFarChange.bind(this);
    }

    handleCelChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }

    handleFarChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }


    render() {
        const scale = this.state.scale;
        const temperature = this.state.tempreture;
        const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
        const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;


        return (
            <div>
                <TempretureInput scale="c" temperature={celsius} onTempChange={this.handleCelChange}/>
                <TempretureInput scale="f" tempreture ={fahrenheit} onTempChange ={this.handleFarChange} />
            </div>
        )
    }
}



function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

export default Calculater;