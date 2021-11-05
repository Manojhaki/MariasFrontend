import React, { Component } from 'react';
import './Home.css';
export default class Home extends Component {
    render() {
        return (
            <div>
                <img src="/assets/images/hdg.png" width="100%" height="600" />
                <hr></hr>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center social" >
                    <a href="http://instagram.com/"><i class="btn btn-dark btn-lg bi bi-facebook col"></i></a>
                    <a href="http://www.facebook.com/"><i class="btn btn-dark btn-lg bi bi-instagram col btn-lg"></i></a>
                    <a role="button" href="tel:+14109420001"><i class="btn btn-dark btn-lg bi bi-telephone-fill col btn-lg" /></a>
                    <a role="button" href="mailto:notreal@notreal.co"><i class="btn btn-dark btn-lg bi bi-envelope-fill col btn-lg"></i></a>
                </div>
                {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/assets/images/boat.png" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/assets/images/cap.png" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/assets/images/shrimp.png" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div> */}

                {/* 
                <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3">
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <i class="bi bi-person-fill"></i>
                        <p class="fact-heading">Create an Account.</p>
                        <p class="fact-text">If you are an existing customer.</p>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <i class="bi bi-plus-lg"></i>
                        <p class="fact-heading">Sign Up for Maria's Rewards.</p>
                        <p class="fact-text">If you are an existing customer.</p>
                    </div>
                    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <i class="bi bi-emoji-heart-eyes"></i>
                        <p class="fact-heading">Place you order.</p>
                        <p class="fact-text">If you are an existing customer.</p>
                    </div>

                </div> */}
                <div class="wrapper reward">
                    <h1>Maria's Rewards Program .</h1>
                </div>
                <div className="Rewards">
                    {/* simple design implementation */}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center m-3 p-3">
                        <div>
                            <a href="www.selectmariaspizza.com"><i class="bi bi-person-fill" ></i></a>
                            <p class="fact-heading">Create an Account.</p>
                            <p>If you are a New Customer.</p>
                        </div>
                        <div>
                            <a href="www.selectmariaspizza.com"><i class="bi bi-plus-lg"></i></a>
                            <p class="fact-heading">Sign Up for Maria's Rewards.</p>
                            <p>If you are an existing customer.</p>
                        </div>
                        <div>
                            <a href="www.selectmariaspizza.com"> <i class="bi bi-emoji-heart-eyes"></i></a>
                            <p class="fact-heading">Place you order.</p>
                            <p>If you are an existing customer.</p>
                        </div>
                    </div>
                </div>
                <div class="wrapper reward">
                    <h1>Place your Order .</h1>
                </div>
                <div className="orders">
                    {/* simple design implementation */}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center m-3 p-9">
                        <div>
                            <a href="www.selectmariaspizza.com"><i class="bi bi-telephone-fill"></i></a>
                            <p class="fact-heading">Call</p>
                            <p>Call us in store <br />to place your order</p>
                        </div>
                        <div>
                            <a href="www.selectmariaspizza.com"><i class="bi bi-bag-check-fill"></i>
                            </a>
                            <p class="fact-heading">Pick-Up</p>
                            <p>Why wait in line ?</p>
                        </div>
                        <div>
                            <a href="www.selectmariaspizza.com"> <i class="bi bi-truck"></i>
                            </a>
                            <p class="fact-heading">Delivery</p>
                            <p>Why even drive? <br />Let us deliver.</p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
