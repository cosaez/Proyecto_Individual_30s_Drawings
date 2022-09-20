import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

import PresetThumbnail from '../components/PresetThumbnail';

const List = props => {
    const context = useContext(UserContext);
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
        console.log("You've selected: " + selection);
    }
    return (
        <div>
            <div>
                <header>
                    <h1>Elige algunas imagenes antes de empezar</h1>
                </header>
            </div>
            <div className="list">
                <PresetThumbnail pic={"https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"} select={select} />
                <PresetThumbnail pic={"https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg"} select={select} />
                <PresetThumbnail pic={"https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg"} select={select} />
                <PresetThumbnail pic={"https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg"} select={select} />
                <PresetThumbnail pic={"https://images.pexels.com/photos/4587955/pexels-photo-4587955.jpeg"} select={select} />
                <PresetThumbnail pic={"https://images.pexels.com/photos/6869636/pexels-photo-6869636.jpeg"} select={select} />
                <PresetThumbnail pic={"https://images.pexels.com/photos/5078672/pexels-photo-5078672.jpeg"} select={select} />
                <PresetThumbnail pic={"https://images.pexels.com/photos/4286618/pexels-photo-4286618.jpeg"} select={select} />
            </div>
            {
                context.user && <div>
                    <Link to={'/new'}>
                        <Button className="list-btn">
                            Añade tus imágenes
                        </Button>
                    </Link>
                </div>
            }
            {
                !context.user && <div>
                    <p>Conectate para añadir más imágenes</p>
                </div>
            }
            {/* <div>
                <Link to={'/new'}>
                    <Button className="list-btn">
                        Añade tus imagenes
                    </Button>
                </Link>
            </div> */}
            <div className="list">
                {data.map((data) => {
                    return (
                        <div className="thumbnail-container" onClick={(e) => { e.target.border = '1px outset green'; console.log("You've selected an image") }}>
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