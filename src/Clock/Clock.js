import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            date: new Date(),
            isLoggedIn: false
        };
    }
    handleLogin() {
        this.setState({ isLoggedIn: true });
    }

    handleLogout() {
        this.setState({ isLoggedIn: false });
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogOutButton onClick={this.handleLogout} />;
        } else {
            button = <LogInButton onClick={this.handleLogin} />;
        }
        
        return (
            <div>
                <GreetingMessage isLoggedIn={true} />
                {button}
                <h1>The time now is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }

    componentDidMount() {
        this.timerID = setInterval(() => (
            this.tick(), 1000
        ))
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() })
    }
}

function GreetingMessage(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h1>Welcome back.</h1>;
    }
    else {
        return <h1>Please sign in.</h1>;
    }
}

function LogInButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogOutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}


export default Clock;