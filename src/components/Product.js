import React from "react";
import "../styles/estore.css"
import {Link} from "react-router-dom";
const Product = ({product, onEdit, onDelete,id})=>{  
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
               <p>Price : ${product.price} MXP </p>
               <p>Description: {product.description}</p>  
                    <Link to= {`/edit-product/${id}`}>
                        <button className="estore-product-btn">Edit</button>
                    </Link>
                    
             
               <button className="estore-product-btn"
               onClick={()=>{onDelete(id)}}>Delete</button>               
           </div>
           
        </div>
    );
    
};

export default Product;