import axios from "axios";
import React from "react";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
const New = () => {
    const context = useContext(UserContext);
    const [image, setImage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/image/create", {
            "image": image
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(image);
        alert('Imagen añadida');
    }
    return (
        <div>
            {
                context.user && <Form onSubmit={handleSubmit}>
                    <FormGroup className="form-group">
                        <Label>Image Url</Label>
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
            <Link to={'/list'}>
                <Button>
                    Volver
                </Button>
            </Link>
        </div>
    )
}

export default New;