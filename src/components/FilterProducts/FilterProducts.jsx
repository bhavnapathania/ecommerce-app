import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function FilterProducts() {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log("products are", products);
  const { type } = useParams();
  console.log("param are", type);
  return (
    <div>
      <div className="pt-16">
        <h1 className="text-gray-600 text-4xl text-center font-inter font-bold ">
          {type}
        </h1>

        <div className="flex flex-wrap justify-center items-center py-8 gap-12">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <div key={index}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    colors={product.color}
                  ></ProductCard>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
