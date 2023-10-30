import { Component } from "react";

class LoginState extends Component{
    constructor(props){
        super(props)
        this.state={
            Login : null
        }
    }

    static SetLoginTrue(){
        this.setState={
            Login : true
        }
    }
    GetLoginState(){
        return this.state.Login
    }

}

export default LoginState.SetLoginTrue