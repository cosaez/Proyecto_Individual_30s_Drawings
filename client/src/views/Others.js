import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
const Others = () => {
    return (
        <div className="Main">
            <div>
                <div id="pillow"></div>
                <h4>Ejercicio de Almohada</h4>
                <p>Moldea una almohada a tu gusto y dibujala</p>
            </div>
            <hr />
            <div>
                <div id="patterns"></div>
                <h4>Dibujo de patrones</h4>
                <p>Lineas, zig-zags, circulos, espirales y más sirven para practicar trazos con confianza</p>
            </div>
            <hr />
            <div>
                <div id="base"></div>
                <h4>Cara o jarrón?</h4>
                <p>Haz un perfil y replicalo como si estuviera en un espejo</p>
            </div>
            <hr />
            <div>
                <div id="dots"></div>
                <h4>Conectar puntos</h4>
                <p>Este ejercicio permite practicar tu coordinación de vista a mano</p>
            </div>
            <hr />
            <div>
                <div id="hand"></div>
                <h4>Perfila tu mano</h4>
                <p>Nunca está de más practicar el dibujo de manos. ¿Qué mejor referencia que la propia?</p>
            </div>
        </div>
    )
}

export default Others;