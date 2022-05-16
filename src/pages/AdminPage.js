import React from 'react';
import ListProducts from '../components/ListProducts';

export const AdminPage = ({products, onDelete, onEdit}) =>{
    //console.log(products);
    return(
        <>
        <ListProducts
          products={products}
          onDelete={onDelete}
          onEdit={onEdit}
        />
        </>
    
    );
    

};