import React from "react";

import Product2Buy from "./Product2Buy";
const ListProducts2Buy = ({products,handleAddItem}) => {
    return(
        <>
        {products.map((product)=>{
            return(
                <Product2Buy
                    id={product._id}
                    key={product._id}
                    product={product}
                    handleAddItem={handleAddItem}

                
                />
            );
        })}
        </>
    );
};


export default ListProducts2Buy;