import axios from "axios";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import toast, { Toaster } from 'react-hot-toast';
const New = () => {
    const context = useContext(UserContext);
    const [image, setImage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/image/create", {
            "image": image
        })
            .then((res) => {
                console.log(res);
                toast.success('Imagen añadida')
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(image);
    }
    return (
        <div>
            {
                context.user && <Form onSubmit={handleSubmit}>
                    <FormGroup className="form-group">
                        <Label>Url de imagen</Label>
                        <Input type="url" required value={image} onChange={(e) => setImage(e.target.value)} />
                    </FormGroup>
                    <Button>Añadir Imagen</Button>
                </Form>
                
            }
            {
                !context.user && <div>
                    <p>Conectate para añadir más imágenes</p>
                </div>
            }
            <Toaster />
            <Link to={'/list'}>
                <Button>
                    Volver
                </Button>
            </Link>
        </div>
    )
}

export default New;