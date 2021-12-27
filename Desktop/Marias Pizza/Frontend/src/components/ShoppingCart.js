import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './ShoppingCart.css';
export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }
    // --> loop through the items in states
    // --> write a console.log test for each of the items in the array
    // --> log the quantity value to make sure we're able to access it

    // --> create a global variable to collect the quantity of each array
    // display() {
    //     console.log("lion",)
    //     if (this.props.states.length = !0) {
    //         return
    //         {
    //             <div><p> {this.props.states.map((element) =>
    //                 <p><img src={element.imageLocation} height="90" width="100" />{element.imageName}  X {element.quantity}  X {element.price} : {element.name}</p>)}
    //             </p>

    //                 <p>Sub Total: {sum.toFixed(2)}</p>
    //                 <p>Shipping Fee: $ 3.99</p>
    //                 <p>Tax: 6% </p>
    //                 <p>Total: {((0.06 * sum) + sum).toFixed(2)}</p>
    //             </div>
    //         }



    //     }
    //     else {
    //         return <p>Empty</p>
    //     }
    // }
    display() {
        var sum = 0;
        var totalItem = 1;
        this.props.states.forEach(element => {
            totalItem = element.quantity * element.price;
            sum = sum + totalItem;
        });
        if (this.props.states.length !== 0) {
            return (
                <div>
                    <p>Sub Total: {sum.toFixed(2)}</p>
                    <p>Shipping Fee: $ 3.99</p>
                    <p>Tax (6%) : {((0.06 * sum).toFixed(2))}  </p>
                    <p>Total: {((0.06 * sum) + sum).toFixed(2)}</p>
                </div>
            )
        }
        else {
            return <p></p>
        }
    }
    render() {
        // create a function that 

        // we need to display the order items if the parent state is updated
        // now the cart displays redundant information of tax and shipping prior to placing the order
        // step1: create an if/else statement. if there is something in the state update the page with total. else return YOUR CART IS EMPTY
        // STEP 2: 
        return (
            <div className="text-center">
                <h1>Maria's Shopping Cart</h1>
                <div >
                    {/* //  {this.display()} */}
                    <p> {this.props.states.map((element) =>
                        <p><img src={element.imageLocation} height="100" width="100" />{element.imageName}  x {element.quantity}  x {element.price}</p>)}
                    </p>
                    {this.display()}
                </div>
                <Button onClick={() => this.props.reset()}>Clear My Cart</Button>
            </div>
        );
    }
}