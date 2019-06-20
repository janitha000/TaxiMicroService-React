import React from 'react'

class Contacts extends React.Component{
    render(){
        return(
            <button onClick={this.onSubmit}>Submit</button>
        )
    }
    onSubmit= () => {
        this.props.history.push('/');
    }
}

export default Contacts;