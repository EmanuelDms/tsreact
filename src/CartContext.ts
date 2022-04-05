import { createContext } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Cart {
  products: Product[];
  shipping_value?: number;
}

const CartContext = createContext({} as Cart);

export default CartContext;
