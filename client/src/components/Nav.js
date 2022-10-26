import React from "react";
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
    const context = useContext(UserContext);
    return (
        <React.Fragment>
            <Navbar className="my-2" id="Nav">
                <Link className="home" to={'/'}>
                    <NavbarBrand className="title">
                        30s
                    </NavbarBrand>
                </Link>
                {
                    !context.user && <Link to={'/login'} className="title">
                        Login
                    </Link>
                }
                {
                    context.user && <div>
                        <h5><FontAwesomeIcon icon="fa-solid fa-circle-user" />Usuario: {context.user.email}</h5>
                    </div>
                }
            </Navbar>
        </ React.Fragment>
    )
}

export default Nav;