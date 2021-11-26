import { createContext, useState } from "react";
import { ProductModel } from "../pages/models/product";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<ProductModel[]>([]);
  const [listProducts, setListProducts] = useState<ProductModel[]>([
    {
      id: 1,
      name: "shoes",
      price: 9999,
    },
    {
      id: 2,
      name: "shirt",
      price: 5500,
    },
  ]);

  return (
    <CartContext.Provider value={{ cart, setCart, listProducts }}>
      {children}
    </CartContext.Provider>
  );
};

//export default CartProvider;
