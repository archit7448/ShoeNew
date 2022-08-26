import { Navigate, Outlet } from "react-router-dom";
import { useData } from "../../context/dataContext";

const CheckoutRoute = () => {
  const { cart } = useData();
  return (
    <>{cart.length > 0 ? <Outlet /> : <Navigate to="/products" replace />}</>
  );
};

export { CheckoutRoute };
