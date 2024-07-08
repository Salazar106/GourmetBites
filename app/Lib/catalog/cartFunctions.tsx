import { useCart } from "./carContext";
interface Product {
  id: string;
  title: string;
  description: string;
  precio: number;
  img: string;
  quantity: number;
}

export const useCartFunctions = () => {
  const { state, dispatch } = useCart();

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (product: Product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const updateQuantity = (product: Product, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { ...product, quantity } });
  };

  return {
    cart: state.cart,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
};
