import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        const handleLogin = (e) => {
            e.preventDefault();
            axios.post('/api/user/login', {
                "email": email,
                "password": password
            })
            .then((res) => {
                console.log(res)
                setUser(res.data.user)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleLogin}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email"   onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>
                <Button>Iniciar Sesión</Button>
            </Form>
            <Link to={'/register'}>No tienes cuenta? Registrate!</Link>
        </div>
    )
}

export default Login;