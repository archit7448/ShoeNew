import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HomePage,
  ProductPage,
  ProductDetail,
  ProfilePage,
  WishListPage,
  SignIn,
  SignUp,
  CheckoutPage,
  CartPage,
  PrivateRoute,
  RestrictedRoute,
  CheckoutRoute,
} from "./pages";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:productName" element={<ProductDetail />} />
        <Route element={<PrivateRoute />}>
          <Route path="/wishlist" element={<WishListPage />} />
          <Route element={<CheckoutRoute />}>
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route element={<RestrictedRoute />}>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
      <ToastContainer transition={Zoom} />
    </div>
  );
};

export default App;
