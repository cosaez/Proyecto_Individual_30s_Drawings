import React from "react";
import Register from '../components/Register';
import LoginRegister from '../components/LoginRegister';

const Login = () => {
    return (
        <React.Fragment>
            <LoginRegister />
            <Register />
        </ React.Fragment>
    )
}

export default Login;