import React, { Component } from 'react';
import './ShoppingCart.css';
export default class Contact extends Component {
    render() {

        return (
            <div className="text-center">
                <h1>Contact Us</h1>
                <hr></hr>
                <p>Better yet, see us in person!</p>
                <p>"We love our customers, <br />so feel free to visit during normal business hours."</p>
                <p>Maria's Pizza<br />
                    866 Otsego St<br />
                    HAVRE DE GRACE, MD 21078<br />
                </p>
                <p> 410-942-0001</p>
                <h2>We're Open At These Times</h2>

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="day">Sunday</div>
                            <div class="time">11am - 10pm</div>
                        </div>
                        <div class="col-sm">
                            <div class="day">Monday</div>
                            <div class="time">11am - 10pm</div>
                        </div>
                        <div class="col-sm">
                            <div class="day">Tuesday</div>
                            <div class="time">11am - 10pm</div>
                        </div>
                        <div class="col-sm">
                            <div class="day">Wednesday</div>
                            <div class="time">11am - 10pm</div>
                        </div>
                        <div class="col-sm">
                            <div class="day">Thursday</div>
                            <div class="time">11am - 10pm</div>
                        </div>
                        <div class="col-sm">
                            <div class="day">Friday</div>
                            <div class="time">11am - 11pm</div>
                        </div>
                        <div class="col-sm">
                            <div class="day">Saturday</div>
                            <div class="time">11am - 11pm</div>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.3219916092744!2d-76.1027076847766!3d39.552346679474894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7c74cd36c54ab%3A0x3e4451ddaee7fb24!2sMaria&#39;s%20Pizza!5e0!3m2!1sen!2sus!4v1631089738157!5m2!1sen!2sus"
                    width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
        );
    }
}
