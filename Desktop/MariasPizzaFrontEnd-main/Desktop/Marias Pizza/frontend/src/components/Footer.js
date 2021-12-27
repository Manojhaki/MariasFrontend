import React, { Component } from 'react';
import './Footer.css';
export default class Footer extends Component {
    render() {
        return (
            <footer className="site-footer text-center" sticky="bottom">
                <div className="container">
                    <div className="row mx-md-n5">
                        <div className="text-right ">
                            <a href="http://instagram.com/"><i class="bi bi-facebook col"></i></a>
                            <a href="http://www.facebook.com/"><i class="bi bi-instagram col"></i></a>
                            <a role="button" href="tel:+14109420001"><i class="bi bi-telephone-fill col" /></a>
                            <a role="button" href="mailto:notreal@notreal.co"><i class="bi bi-envelope-fill col"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
