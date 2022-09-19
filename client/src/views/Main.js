import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
const Main = () => {
    return (
        <div className="Main">
            <p><em>30 seconds drawing es un ejercicio de dibujo gestual que prioriza la forma por sobre los detalles</em></p>
            <hr />
            <h2>Instrucciones</h2>
            <div className="instructions">
                <ul>
                    <li>
                        Antes de empezar debes seleccionar las imagenes de tu ejercicio
                    </li>
                    <li>
                        Solo usuarios conectados pueden añadir sus propias imagenes al menú de selección
                    </li>
                    <li>
                        Las imagenes seleccionadas aparecerán una tras otra por 30 segundos al presionar el botón "Empezar"
                    </li>
                    <li>
                        Debes dibujar a grandes rasgos cada imagen en papel
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