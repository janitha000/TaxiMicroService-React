import React from 'react'

class SignupClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            password : ''
        }
    }
    render(){
        return(
            <SignUp/>
        )
    }
}

const SignUp = () => (
    <div> This is SignUp Page</div>

)


export default SignupClass;