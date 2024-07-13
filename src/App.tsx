import MainLayout from "./components/layout/MainLayout";
import './App.css';
import { useEffect } from "react";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  const cartItems = useAppSelector(state => state.cart.cart);
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        const message = 'Are you sure you want to leave? Your cart items will be lost.';
        event.preventDefault();
        event.returnValue = message; // For Chrome
        return message; // For other browsers
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [cartItems]);
  return (
    <>
      <MainLayout />
    </>
  );
};

export default App;