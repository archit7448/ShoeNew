import { Coupon, Header, CartCard, TotalPrice } from "../../components";
import { useData } from "../../context/dataContext";
import "./cartPage.css";
export const CartPage = () => {
  const { cart, couponPrice } = useData();
  const totalQuantity = () => {
    return cart.reduce((acc, { qty }) => acc + qty, 0);
  };
  return (
    <main>
      <Header />
      <section className="cart-section">
        <div>
          <h1 className="cart-heading">
            MY SHOPPING CART [{totalQuantity()}]:
          </h1>
        </div>
        <div className="flex-row flex-space-between cart-wrapper">
          <div className="cart-list-wrapper">
            {cart.map((value) => {
              return <CartCard key={value._id} prop={value} />;
            })}
          </div>
          <div className="cart-total">
            {cart.length > 0 && <Coupon />}
            {cart.length > 0 ? (
              <TotalPrice prop={{ array: cart, coupon: couponPrice }} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
