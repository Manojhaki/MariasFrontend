import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';
class Navtab extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }
    // negative items check
    // reset the state/ clear the shopping cart
    // react-toastify
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <Navbar className="navbar" expand="lg" sticky='top' >
                {/* <div className="container"> */}
                <NavbarBrand className="" href="/"><img src="/assets/images/marialogo.png" height="100" width="100" alt="Maria's Pizza Logo" /></NavbarBrand>
                <NavbarToggler class="navbar-toggler" onClick={this.toggleNav} ><i class="bi bi-justify"></i>
                </NavbarToggler>
                <Collapse isOpen={this.state.isNavOpen} id="toogleNav" navbar>
                    <Nav className="nav navbar-nav" navbar >
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <i class="bi bi-house-fill" /> Home
                            </NavLink>
                        </NavItem>
                        {/* 
                                <NavItem>
                                    <NavLink className="nav-link" to="/Location">
                                        <i class="bi bi-geo-alt-fill"></i> Location
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/catering">
                                        <i class="bi bi-truck"></i> Catering Services
                                    </NavLink>
                                </NavItem> */}
                        <NavItem>
                            <NavLink className="nav-link" to="/souvenirs">
                                <i class="bi bi-gift-fill" /> souvenirs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/Cart">
                                <i class="bi bi-cart"></i>  Cart {this.props.cartItems}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/Contact">
                                <i class="bi bi-geo-alt"></i> Contact Us
                            </NavLink>
                        </NavItem>
                        <Button />
                    </Nav>
                </Collapse>
                {/* </div> */}
            </Navbar>
        );
    }
}
export default Navtab;