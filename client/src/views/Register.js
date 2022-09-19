import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("second")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const [errorEmail, setErrorEmail] = useState("")

    const handleRegister = (e) => {
        e.preventDefault();

        //delete later
        console.log(username);
        console.log(email);
        console.log(password);
        console.log(confirmPassword);

        axios.post('http://localhost:8000/api/user/register',
            {
                "username": username,
                "email": email,
                "password": password,
                "confirmPassword": confirmPassword
            }
        )
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data)
                if (err.response.data.code && err.response.data.code == 11000) {
                    setErrorEmail('Email is already being used')
                }
            })
    }

    return (
        <div>
            <h1>Formulario de Registro</h1>
            <Form onSubmit={handleRegister}>
                <FormGroup>
                    <Label htmlFor="username">Nombre de usuario</Label>
                    <Input type="text" id="username" required onChange={(e) => setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
                    {errorEmail !== '' ? <p className="error-message">{errorEmail}</p> : ''}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Clave</Label>
                    <Input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="confirmPassword">Confirmar Clave</Label>
                    <Input type="password" id="confirmPassword" required onChange={(e) => setconfirmPassword(e.target.value)} />
                </FormGroup>
                <Button>Register</Button>
            </Form>
            <Link to={'/login'}>Already have an account? Login</Link>
        </div>
    )
}

export default Register;