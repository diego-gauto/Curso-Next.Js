import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";
import Link from "next/link";
import { CartContext } from "../context/CartProvider";
import { PropModel } from "./models/props";
import styles from "../styles/Home.module.css";
import CardProduct from "../components/CardProduct";

export default function Home(props) {
  const { listProducts } = useContext(CartContext);
  //console.log(props.products.results);
  // const [listProducts, setListProductos] = useState<any>(
  //   props.products.results
  // );
  //console.log(listProductos);

  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Image src="/vercel.svg" height={200} width={200} alt={""} />
      <h1> Ecommerce de ejemplo</h1>
      <h3> Producto destacado</h3>
      {
        <CardProduct
          product={{
            id: 1,
            name: listProducts[0].name,
            price: listProducts[0].price,
          }}
        />
      }
      {/* {listProducts[0].title}
      {`$ ${listProducts[0].price}`}*/}
      <Link href="/list">
        <a>To Products</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  // const response = await fetch(
  //   "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas"
  // );
  // const data = await response.json();
  return {
    props: {
      title: "Ecommerce example",
      //     products: ,
    },
  };
}
