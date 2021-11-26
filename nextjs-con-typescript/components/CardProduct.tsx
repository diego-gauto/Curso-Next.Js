import { ProductModel } from "../pages/models/product";
import { PropModel } from "../pages/models/props";
import style from "./card.module.css";
//import styled from "styled-components"

const CardProduct = (props: PropModel) => {
  return (
    <div className={style.card}>
      <view>
        <h2> {props.product.name} </h2>
        <p>$ {props.product.price} </p>
      </view>
    </div>
  );
};

export default CardProduct;
