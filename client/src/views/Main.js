import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
const Main = () => {
    return (
        <div className="Main">
            <h2>Instrucciones</h2>
            <div className="instrucciones">
            <ul>
                <li>
                    Antes de empezar debes seleccionar las imagenes de tu ejercicio
                </li>
                <li>
                    Solo usuarios conectados pueden añadir sus propias imagenes al menú de selección
                </li>
                <li>
                    Las imagenes seleccionadas aparecerán una tras otra al presionar en el botón "Empezar"
                </li>
                <li>
                    Tienes 30 segundos para dibujar a grandes razgos cada imagen en papel
                </li>
            </ul>
            </div>
            <Link to={'/list'}>
                <Button>
                    Entendido
                </Button>
            </Link>
        </div>
    )
}

export default Main;