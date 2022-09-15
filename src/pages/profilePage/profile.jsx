import { useAuth } from "../../context/auth";
import { FiLogIn } from "react-icons/fi";
import "./profile.css";
import {
  AddressComponent,
  AddressManager,
  CartCard,
  Header,
  TotalPrice,
} from "../../components/index";
import { useAddress } from "../../context/address";
import { useState } from "react";
import { useData } from "../../context/dataContext";
export const ProfilePage = () => {
  const { user, LogOutHandler } = useAuth();
  const { Address } = useAddress();
  const { order } = useData();
  const [display, setDisplay] = useState(false);
  const addressNavigate = () => {
    setDisplay((state) => !state);
  };
  // Reverse Array

  const reverseArray = (array) => {
    let newarray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newarray.push(array[i]);
    }
    return newarray;
  };
  const reverseOrderArray = reverseArray(order);
  return (
    <main>
      <Header />
      <section className="profile-section">
        <div className="profile-wrapper">
          <div className="address-wrapper">
            <div className="address-heading">
              <h1>Profile</h1>
            </div>
            <div className="address-detail-wrapper flex-col">
              <div className="flex-row">
                <h2>First Name:</h2>
                <h3 className="margin-1rem">{user.firstName}</h3>
              </div>
              <div className="flex-row">
                <h2>Last Name:</h2>
                <h3 className="margin-1rem">{user.lastName}</h3>
              </div>
              <div className="flex-row">
                <h2>Email:</h2>
                <h3 className="margin-1rem">{user.email}</h3>
              </div>
              <button
                className="button-primary button-address button-logout"
                onClick={() => LogOutHandler()}
              >
                Logout <FiLogIn />
              </button>
            </div>
          </div>
        </div>
        <div className="profile-wrapper">
          <div className="address-wrapper">
            <div className="address-heading">
              <h1>Addresses</h1>
            </div>
            {Address.length > 0 ? (
              Address.map((value) => {
                return <AddressManager key={value._id} prop={value} />;
              })
            ) : (
              <></>
            )}
            <button
              className="button-primary button-address"
              onClick={() => addressNavigate()}
            >
              Add New Address + 
            </button>
            {display ? (
              <AddressComponent
                prop={{
                  firstname: "",
                  lastname: "",
                  address: "",
                  pincode: "",
                  city: "",
                  state: "",
                  email: "",
                  phoneNumber: "",
                  title: "",
                  edit: "",
                  _id: "",
                  setDisplay,
                }}
              />
            ) : (
              <></>
            )}
          </div>
          {order.length > 0 && (
            <div className="address-wrapper">
              <div className="address-heading">
                <h1>Order Details</h1>
              </div>
              {reverseOrderArray.map((orderDeails) => {
                const {
                  _id,
                  paymentMethod,
                  paymentId,
                  couponPrice,
                  orderArray,
                  checkoutAddress,
                } = orderDeails;
                const {
                  firstname,
                  lastname,
                  address,
                  pincode,
                  city,
                  state,
                  email,
                  phoneNumber,
                } = checkoutAddress[0];
                return (
                  <div key={_id} className="order-details-wrapper">
                    <div className="order-details">
                      <h1>Order Id :</h1>
                      <h3>{_id}</h3>
                    </div>
                    <div className="order-details">
                      <h2>Payment Method :</h2>
                      <h3>{paymentMethod}</h3>
                    </div>
                    <div className="order-details">
                      <h2>Payment Id :</h2>
                      <h3>{paymentId}</h3>
                    </div>
                    <div className="address-detail-wrapper">
                      <div>
                        <h2>Shipping Address:</h2>
                        <div className="margin-top-1rem">
                          <h3>
                            {firstname} {lastname}
                          </h3>
                          <h3>{address}</h3>
                          <h3>
                            {pincode} ,{city}{" "}
                          </h3>
                          <h3>{state} </h3>
                        </div>
                      </div>
                      <div>
                        <h2>Contact Info:</h2>
                        <div className="margin-top-1rem">
                          <h3>{email}</h3>
                          <h3>+91{phoneNumber}</h3>
                        </div>
                      </div>
                    </div>
                    {orderArray.map((value) => (
                      <CartCard key={value._id} prop={value} />
                    ))}
                    <TotalPrice
                      prop={{ array: orderArray, coupon: couponPrice }}
                    />
                    <hr />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
