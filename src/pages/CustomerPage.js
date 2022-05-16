import React, { useState } from "react";
import ListProducts2Buy from "../components/ListProducts2Buy";


export const CustomerPage = ({products, itemsList, handleAddItem, handleRemoveItem}) =>{
    //console.log(products);
    console.log(itemsList);
    
    
    return (                
            <>
            <ListProducts2Buy
                products={products}
                handleAddItem={handleAddItem}
             />
            </>    
    );
};

