import React from "react";
import { Link } from "react-router-dom";
import '../styles/estore.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used

const NavBarCustomer = ({onPress, orderSize})=>{
    return(
        <div className="estore-product-navbar">
            <ul>
                <li><h1> Mi Changarro </h1></li>
                <li><h2>Buy Our Healthy Stuff</h2></li>
                <li> {orderSize} Items selected</li>
                <Link to="checkout">
                
                    <li><FontAwesomeIcon icon={faShoppingCart} size="lg"/></li>
                </Link>
                
            </ul>
        </div>
    );
};


export default NavBarCustomer;

//<a href="https://www.flaticon.com/free-icons/shopping-cart" title="shopping cart icons">Shopping cart icons created by Kiranshastry - Flaticon</a>