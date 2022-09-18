import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

const List = props => {
    const { item, setItem } = props;
    const [data, setData] = useState([]);
    const selection = [];
    useEffect(() => {
        axios.get("http://localhost:8000/api/images")
            .then(res => { setData(res.data.images) })
            .catch((err) => {
                console.log(err)
            });
    }, [])
    const select = (image) => {
        selection.push(image);
        console.log("Your selection includes: " + selection)
    }
    return (
        <div>
            <div>
                <header>
                    <h1>Elige algunas imagenes antes de empezar</h1>
                </header>
            </div>
            <div className="list">
                <div className="thumbnail-container" onClick={(e) => { e.target.border = '1px outset green'; console.log("Imagen seleccionada") }}>
                    <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg" className="thumbnail" onClick={(e) => { select("https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg") }} />
                </div>
                <div className="thumbnail-container" onClick={(e) => { e.target.border = '1px outset green'; console.log("Imagen seleccionada") }}>
                    <img src="https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg" className="thumbnail" onClick={(e) => { select("https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg") }} />
                </div>
                <div className="thumbnail-container" onClick={(e) => { e.target.border = '1px outset green'; console.log("Imagen seleccionada") }}>
                    <img src="https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg" className="thumbnail" onClick={(e) => { select("https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg") }} />
                </div>
                <div className="thumbnail-container" onClick={(e) => { e.target.border = '1px outset green'; console.log("Imagen seleccionada") }}>
                    <img src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg" className="thumbnail" onClick={(e) => { select("https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg") }} />
                </div>
                <div className="thumbnail-container" onClick={(e) => { e.target.border = '1px outset green'; console.log("Imagen seleccionada") }}>
                    <img src="https://images.pexels.com/photos/4587955/pexels-photo-4587955.jpeg" className="thumbnail" onClick={(e) => { select("https://images.pexels.com/photos/4587955/pexels-photo-4587955.jpeg") }} />
                </div>
                <div className="thumbnail-container" onClick={(e) => { e.target.border = '1px outset green'; console.log("Imagen seleccionada") }}>
                    <img src="https://images.pexels.com/photos/6869636/pexels-photo-6869636.jpeg" className="thumbnail" onClick={(e) => { select("https://images.pexels.com/photos/6869636/pexels-photo-6869636.jpeg") }} />
                </div>
                <div className="thumbnail-container" onClick={(e) => { e.target.border = '1px outset green'; console.log("Imagen seleccionada") }}>
                    <img src="https://images.pexels.com/photos/5078672/pexels-photo-5078672.jpeg" className="thumbnail" onClick={(e) => { select("https://images.pexels.com/photos/5078672/pexels-photo-5078672.jpeg") }} />
                </div>
                <div className="thumbnail-container" onClick={(e) => { e.target.border = '1px outset green'; console.log("Imagen seleccionada") }}>
                    <img src="https://images.pexels.com/photos/4286618/pexels-photo-4286618.jpeg" className="thumbnail" onClick={(e) => { select("https://images.pexels.com/photos/4286618/pexels-photo-4286618.jpeg") }} />
                </div>
            </div>
            <div>
                <Link to={'/new'}>
                    <Button className="list-btn">
                        Añade tus imagenes
                    </Button>
                </Link>
            </div>
            <div className="list">
                {data.map((data) => {
                    return (
                        <div className="thumbnail-container" onClick={(e) => { e.target.border = '1px outset green'; console.log("Imagen seleccionada")}}>
                            <img src={data.image} className="thumbnail" onClick={(e) => { select(data.image) }} />
                        </div>
                    )
                })}
            </div>
            <div>
                <Link to={'/exercise'}>
                    <Button className="list-btn" style={{ backgroundColor: '#385380' }} onClick={(e) => { setItem(selection) }}>
                        Empezar
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default List;