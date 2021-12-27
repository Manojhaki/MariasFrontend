import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Button, CardText } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './foodItem.css';
toast.configure();

export default function FoodItem(props) {
    // const [STATE ITEM, SET STATE FUNCTION] = USE STATE(INITIAL STATE VALUE)
    // TODO: rename to quantity
    const [foodItem, setFoodItem] = useState(1);
    // TODO: when we click the order now button...
    // call a function that takes the food item data, and the quantity selected
    // and adds it to the state in the `home.js` file
    const items = {
        quantity: foodItem,
        price: props.example.price,
        imageName: props.example.name,
        imageLocation: props.example.image
    }
    // function notify() {
    //alert("Wow");
    //   const notify =
    //      console.log("Notify");
    //}
    function checkItems() {
        if (foodItem < 1) {
            console.log("not possible");
            setFoodItem(1);
        }
    }
    //  const notify = () => toast("Wow so easy !");
    function updateNotify() {
        props.updateShoppingCart(items);
        toast("hello");
        console.log("king");
    }
    return (
        <div >
            <div >
                <Card className="images">
                    <CardImg src={props.example.image} alt={props.example.name} width="100px" height="100px"></CardImg>
                    <CardText className="text-center">{props.example.price}</CardText>
                </Card>
                <div className="center-block">
                    <Button class="decrement counter-btn" onClick={() => setFoodItem(foodItem - 1)} >-{checkItems()}</Button>
                    <input type="number" placeholder="Quantity" readonly="" value={foodItem} />
                    <Button class="increment counter-btn" onClick={() => setFoodItem(foodItem + 1)} >+</Button>
                    <br></br>
                    <Button className="updateButton"
                        onClick={
                            // waveHello();
                            // updateNotify();
                            updateNotify
                        }
                        style={{ width: "120px" }}
                    >Add to Cart</Button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}
