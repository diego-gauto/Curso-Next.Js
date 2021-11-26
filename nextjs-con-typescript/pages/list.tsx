import Link from "next/link";
import { useContext, useState } from "react";
import CardProduct from "../components/CardProduct";
import { CartContext } from "../context/CartProvider";
import { ProductModel } from "./models/product";

const List = () => {
  const { listProducts } = useContext(CartContext);

  return (
    <div>
      Soy la pagina de productos
      {listProducts.map((element, index) => {
        return <CardProduct key={index} product={element} />;
      })}
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default List;
