import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Remove = () => {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/images")
            .then(res => { setData(res.data.images) })
            .catch((err) => {
                console.log(err)
            });
        console.log(data)
    }, [])
    const deletePicture = (id) => {
        axios.delete(`http://localhost:8000/api/image/${id}`)
            .then((res) => {
                console.log(res);
                setData(data.filter(data => data._id !== id));
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div>
                <header>
                    <h1>Borrar imagenes</h1>
                    {/* <Link to={'/pirate/new'}><button className="link-btn">Add Pirate</button></Link> */}
                </header>

                {/* {
                    !context.user.email && <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>url de imagen</Label>
                            <Input type="url" required value={image} onChange={(e) => setImage(e.target.value)} />
                        </FormGroup>
                        <Button>Añadir Imagen</Button>
                    </Form>
                } */}

            </div>
            <div className="list">
                {data.map((data) => {
                    return (
                        <div className="thumbnail-container" onClick={(e) => { deletePicture(data._id) }}>
                            <img src={data.image} className="thumbnail" />
                        </div>
                        //     <div className="summary-container">
                        //         <h4>{data.name}</h4>
                        //         <div className="buttons">
                        //             <Link to={"/pirate/" + data._id}><button className="details">View Pirate</button></Link>
                        //             <button className="delete" onClick={(e) => { deletePirate(data._id) }}>
                        //                 Delete
                        //             </button>
                        //         </div>
                        //     </div>
                        // </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Remove;