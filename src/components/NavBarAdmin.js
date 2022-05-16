import React from "react";
import {Link} from "react-router-dom";
import "../styles/estore.css"

const NavBarAdmin = ({onPress}) => {
    return (
        <div className="estore-product-navbar">
            <ul>
                <li><h1> Mi Changarro </h1></li>
                <li><h2> Inventory - Admin </h2></li>
                <li>
                  <Link to="create-new-product">
                     Add new Product
                  </Link>                                      
                </li>
               
            </ul>
        </div>
    );
    
};

export default NavBarAdmin;