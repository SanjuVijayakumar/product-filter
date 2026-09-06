import React from "react";
import ProductCard from "../productCard/ProductCard";

const ProductList = ({ products }) => {

    console.log(products);
    
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (      //no return (  ::  return {
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;