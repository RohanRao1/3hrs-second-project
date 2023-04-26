import React from "react";
import classes from "./AvailableProducts.module.css";
import Card from "../UI/Card";
import ProductItem from './ProductItem'


const Products = [
  {
    id: "m1",
    name: "Dolo",
    description: "For Fever and pain",
    price: 20,
  },
  {
    id: "m2",
    name: "Sinarest",
    description: "For Cold ",
    price: 16,
  },
  {
    id: "m3",
    name: "Tusq X",
    description: "For Cough",
    price: 50,
  },
  {
    id: "m4",
    name: "Crocin",
    description: "For Headache",
    price: 10
  },
];

const AvailableProducts = () => {
  const productsList = Products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;