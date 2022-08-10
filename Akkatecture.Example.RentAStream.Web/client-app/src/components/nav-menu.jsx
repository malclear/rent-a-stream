import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

NavMenu.propTypes = {
    
};

function NavMenu(props) {
    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                <Container>
                    <NavbarBrand tag={Link} to="/">Akkatecture.Example.RentAStream.Web</NavbarBrand>
                    <NavbarToggler  className="mr-2" /> 
                    {/*onclick={this.togglenavbar}*/}
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse"  navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">Movies</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/account" >Account</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/admin" >Admin</NavLink>
                            </NavItem >
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/login" >Log In</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavMenu;
