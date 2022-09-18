import React from "react";
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { Link } from "react-router-dom";
// import { Context } from "react";

const Nav = () => {
    return (
        <React.Fragment>
            <Navbar className="my-2" id="Nav">
                <Link className="home" to={'/'}>
                    <NavbarBrand className="title">
                        30s
                    </NavbarBrand>
                </Link>
                {/* despues de implementar usurios eliminar lo siguiente y usar el context comentado en su lugar */}
                <Link to={'/login'}>
                    <Button>
                        Login
                    </Button>
                </Link>
                {/* {
                    !context.user.email && <Link to={'/login'}>
                    <Button>
                        Login
                    </Button>
                </Link>
                }
                {
                context.user.email && <div>
                    <h5>Usuario: {context.user.email}</h5>
                    </div>
                } */}
            </Navbar>
        </ React.Fragment>
    )
}

export default Nav;