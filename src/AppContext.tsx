import React, { useReducer } from "react";
import { Cart } from "./CartContext";

type CartActionType = {
  type: "ADD_PRODUCT" | "REMOVE_PRODUCT";
};

const AppContext: React.FC = () => {
  const cart = useReducer((state: Cart, action: CartActionType) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return {
          ...state,
          products: [
            ...state.products,
            { id: 123, name: "New Product", price: 123 },
          ],
        };
      default:
        return state;
    }
  }, {} as Cart);

  return <ul></ul>;
};

export default AppContext;
