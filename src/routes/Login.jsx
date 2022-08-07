import './Login.css'
import React from "react";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };
    }
    UNSAFE_componentWillMount() {
        window.addEventListener('resize',this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.addEventListener('resize',this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () =>{
        this.setState({width:window.innerWidth});
    }
    render() {
        return <section>
            <form>
                <p>Preencha seus dados para fazer login</p>
                <input type={"text"} placeholder={"Username"}/>
                <input type={"password"} placeholder={"Password"}/>
                <button type={"submit"}>Login</button>
            </form>
        </section>
    }
}
export default Login
