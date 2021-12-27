import FoodItem from '../components/FoodItem';
import React, { useState } from 'react';
function Order(props) {
    // if someone clicks the sort button, it will return the sorted array
    //else it will return the original array
    const [sort, setselectsort] = useState(1);
    function selectSort() {
        if (sort == 2) {
            return props.examples.sort((a, b) => (a.name > b.name) ? 1 : -1);
        }
        else if (sort == 3) {
            return props.examples.sort((a, b) => (parseFloat(a.price) > parseFloat(b.price)) ? 1 : -1);
        }
        return props.examples;
    }
    const item = selectSort().map(example => {
        return (
            <div key={example.id} className="col-md-5 m-4" >
                <FoodItem example={example} updateShoppingCart={props.updateShoppingCart} />
            </div>
        );
    });
    function sortItemName() {
        setselectsort(2);
    }
    function sortItemPrice() {
        setselectsort(3);
    }
    return (
        <div>
            {/* <Button className="sort" onClick={sortItemName}>Sort by Name</Button>
            <Button className="sort" onClick={sortItemPrice}>Sort by Price</Button> */}
            <div class="dropdown d-flex justify-content-end" >
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort By
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" onClick={sortItemName}>Sort by Name</a>
                    <a class="dropdown-item" onClick={sortItemPrice}>Sort by Price</a>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {item}
                </div>
            </div>
        </div>
    );
}
export default Order;
