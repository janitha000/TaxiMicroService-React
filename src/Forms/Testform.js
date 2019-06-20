import React from 'react';

class Testform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            dropdownvalue: 'janitha'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDropDownChange = this.handleDropDownChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        console.log("Submit " + this.state.value);
        event.preventDefault();
    }

    handleDropDownChange(event) {
        this.setState({ dropdownvalue: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <select value={this.state.dropdownvalue} onChange={this.handleDropDownChange} >
                    <option value="janitha">Janitha</option>
                    <option value="vindya">Vindya</option>
                    <option value="prageesha">Prageesha</option>
                    <option value="kavinda">Kavinda</option>
                </select>

                <h3>{this.state.value}</h3>
                <h4>{this.state.dropdownvalue}</h4>
            </div>

        )
    }
}

export default Testform;