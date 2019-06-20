import React from 'react'
import BiolingVerdict from './BoilingVerdict'

class TempretureInput extends React.Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onTempChange(e.target.value);
    }

    render(){
        const tempreture = this.props.tempreture;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperture in {scaleNames[scale]}:</legend>
                <input value={tempreture} onChange={this.handleChange}/>

                <BiolingVerdict celsius = {parseFloat(tempreture)}/>
            </fieldset>
        )
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  export default TempretureInput;