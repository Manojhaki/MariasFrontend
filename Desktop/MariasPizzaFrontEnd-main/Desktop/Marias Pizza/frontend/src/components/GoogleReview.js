import React, { Component } from 'react';
import './GoogleReview.css';
export default class GoogleReview extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <img src="/assets/images/marialogo.png" height="100" width="100" alt="Maria's Pizza Logo" />
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#"> <i class="bi bi-house-fill" /> Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> <i class="bi bi-gift-fill" /> souvenirs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> <i class="bi bi-cart"></i>  Cart {this.props.cartItems}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">   <i class="bi bi-geo-alt"></i> Contact Us</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}
