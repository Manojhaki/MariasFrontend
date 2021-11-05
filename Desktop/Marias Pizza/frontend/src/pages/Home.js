import React, { Component } from 'react';
import Navtab from '../components/Navbar';
import Footer from '../components/Footer';
import Head from '../components/Home';
import Contact from '../components/Contact';
import { EXAMPLES } from '../testData/example';
import { Route, Switch, Redirect } from 'react-router';
import Order from './Order';
import Test from './Test';
import ShoppingCart from '../components/ShoppingCart'
import Typing from '../components/Typing'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            examples: EXAMPLES,
            shoppingCart: []
        }
        this.baseState = this.state;
        //alternative to use binding to update the current state with the new state
        // or just use an arrow function because there is no this reference in the arrow function
        // this.updateShoppingCart = this.updateShoppingCart.bind(this);
    }
    // we want to update our shopping cart state,
    // to have everything that has already been put inside of it
    // plus whatever else we add in, when we click on "order now"
    updateShoppingCart = (items) => {
        this.setState({
            shoppingCart: [...this.state.shoppingCart, items]
        })
    }
    getShoppingCartItems() {
        var sum = 0;
        console.log("Testing State", this.state.shoppingCart);
        this.state.shoppingCart.forEach(cartItem => {
            sum = sum + cartItem.quantity;
        });
        return sum;
    }
    resetForm = () => {
        this.setState(this.baseState);
    }
    // TODO: Write the function that can add an item into our shopping cart
    render() {
        const homepage = () => {
            return (
                <Head />
            );
        }
        const order = () => {
            return (
                <Order examples={this.state.examples} updateShoppingCart={this.updateShoppingCart} />
            );
        }
        const test = () => {
            return (
                <Test />
            );
        }
        const shoppingCart = () => {
            return (
                <ShoppingCart states={this.state.shoppingCart} updateShoppingCart={this.updateShoppingCart} reset={this.resetForm} />
            );
        }
        const contact = () => {
            return (
                <Contact />
            );
        }
        var cartItems = this.getShoppingCartItems();
        return (
            <div>
                <Navtab cartItems={cartItems} />
                <Typing />
                <Switch>
                    <Route path='/home' component={homepage} />
                    <Route exact path='/souvenirs' component={order} />
                    <Route exact path='/Cart' component={shoppingCart} />
                    <Route exact path='/Contact' component={contact} />
                    <Route exact path='/Test' component={test} />

                    {/* <Redirect to='/home' /> */}
                </Switch>
                {/* <Button onClick={this.resetForm}>Press</Button> */}
                <Footer />
            </div>
        );
    }
}
export default Home;