import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

const Exercise = ({item}) => {
    
    console.log({item});
    return (
        <Carousel wrap={false} id="slide" interval={1}>
            <Carousel.Item interval={15000}>
                <div className="comment">
                    <h3>Iniciando...</h3>
                    <table>
                        <tr>
                            <td>N° de imagenes:</td>
                            <td>{item.length}</td>
                        </tr>
                        <tr>
                            <td>Tiempo calculado:</td>
                            <td>{30 * item.length} segundos</td>
                        </tr>
                    </table>
                </div>
            </Carousel.Item>
            {/* make a map of carousel items with arrays */}
            {item.map((item, i) => {
                return (
                    <Carousel.Item key={i} interval={30000}>
                        <img className="photo"
                            src={item}
                            alt={i}
                        />
                    </Carousel.Item>
                )
            })}
            <Carousel.Item>
                <div className="comment">
                    <h3>Ejercicio Finalizado</h3>
                    <Link className="home" to={'/'}>
                        Haz click aquí para volver a la pagina principal
                    </Link>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Exercise;