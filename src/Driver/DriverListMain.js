import React from 'react'
import axios from 'axios'

import DriverTable from './DriverTable/DriverTable'

class DriverListMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            driver: ''
        }
    }
    render() {
        return (

            <div>
                <DriverTable />
                <p>{this.state.driver}</p>
            </div>

        )
    }

    componentDidMount() {
        console.log("Calling get driver");
        this.getDriver();
    }

    getDriver() {
        axios.get("http://localhost:3001/driver/1").then(response => {
            console.log( response.data[0]);
            response.data.map(driver => ({               
                'FristName': '${user.FirstName}'
            }))
        }).then(driver => {
            console.log(driver);
            this.setState({ driver: driver })
        }).catch(error => console.log(error));

    }
}

var TableData = {
    data: {
        'First Name': "Janitha",
        'Last Name': "Tennakoon",
        'NIC': "90334343",
        'Age': 29
    }
}



export default DriverListMain