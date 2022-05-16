import React from 'react';
import Product from "./Product";
const ListProducts = ({products, onDelete,onEdit})=>{
  return (
    <>
      {products.map((product) => {
        return (
          <Product
            id={product._id}
            key={product._id}
            product={product}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </>
  );
};

export default ListProducts;