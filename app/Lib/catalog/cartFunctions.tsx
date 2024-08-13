import { toast, ToastContainer } from "react-toastify";
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
  const notify = () => toast("Wow so easy!");

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    {notify}
  };

  const removeFromCart = (product: Product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const updateQuantity = (product: Product, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { ...product, quantity } });
  };

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return {
    cart: state.cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotal
  };
};
