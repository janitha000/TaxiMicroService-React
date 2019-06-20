import React from 'react'
import Testform from '../Forms/Testform'
import Clock from '../Clock/Clock'
import Calculater from '../Tempreture/Calculater'

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>This is Home page</h1>
                <Clock />
                <Testform />
                <Calculater />
            </div>
        )
    }
}

export default Home;