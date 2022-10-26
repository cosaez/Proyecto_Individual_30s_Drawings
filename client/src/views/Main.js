import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
const Main = () => {
    return (
        <div className="Main">
            <div id="welcome">
                <Link to={'/gd'} id="welcome-link">
                    <div id="welcome-img">
                    </div>
                    <div>
                        <h2>Gesture Drawing</h2>
                    </div>
                </Link>
            </div>
            <Link to={'/others'}>
                Otros Ejercicios
            </Link>
        </div>
    )
}

export default Main;