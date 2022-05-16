import React from "react";
import "../styles/estore.css";

const Product2Buy = ({product, handleAddItem}) => {
    return(
        <div className="estore-product">
            <div className="estore-product-image">
                <img
                    src={product.imageUrl}
                    alt="Product"
                    width={250}
                    height={250}
                />
            </div>
            <div className="estore-product-details">
                <h1>{product.name}</h1>
                <p>Price: ${product.price} MXP</p>
                <p>Description: {product.description}</p>
                <button 
                    className="estore-product-btn"
                    onClick={()=>{handleAddItem(product)}}
                >Add to cart</button>

            

            </div>

        </div>


    );
};


export default Product2Buy
