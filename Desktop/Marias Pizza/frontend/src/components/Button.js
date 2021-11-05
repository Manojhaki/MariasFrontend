// the button component that will be used in multiple pages
import React, { Component } from 'react';
import './Button.css';
export default class Button extends Component {
    render() {
        return (
            <div>
                <li class="nav-item active ">
                    <a href="https://mariaspizzahavredegrace.foodtecsolutions.com/ordering/home" class="btn btn-brand" rel="noopener">Order Online</a>
                    <a href="https://mariaspizzahavredegrace.foodtecsolutions.com/ordering/loyalty" class="btn btn-brand" rel="noopener">Maria's Rewards</a>
                </li>
            </div>
        )
    }
}
