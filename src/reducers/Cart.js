import axios from "axios";
import {
  notificationError,
  notifyMessage,
} from "../utility/notification/notify";
import { v4 as uuid } from "uuid";
export const addToCart = async (dispatch, product) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "UPDATE_CART", payload: response.data.cart });
  } catch (error) {
    console.log(error);
    notificationError("GET FAILED");
  }
};

export const removeFromCart = async (dispatch, id) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "UPDATE_CART", payload: response.data.cart });
    notifyMessage("Removed");
  } catch (error) {
    console.log(error);
    notificationError("GET FAILED");
  }
};

export const emptyCart = async (dispatch, cart, value) => {
  const { couponPrice, paymentMethod, paymentId, checkoutAddress } = value;
  console.log(checkoutAddress)
  try {
    const response = await axios.delete(`/api/user/cart`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "UPDATE_CART", payload: response.data.cart });
    notifyMessage("ORDER SUCESSFULL");
    dispatch({
      type: "UPDATE_ORDER",
      payload: {
        orderArray: cart,
        couponPrice,
        paymentId,
        paymentMethod,
        checkoutAddress,
        _id: uuid(),
      },
    });
    dispatch({ type: "UPDATE_COUPON_PRICE", payload: 0 });
  } catch (error) {
    console.log(error);
    notificationError("GET FAILED");
  }
};

export const incrementOperater = async (dispatch, id) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "UPDATE_CART", payload: response.data.cart });
  } catch (error) {
    console.log(error);
    notificationError("GET ERROR");
  }
};

export const decrementOperater = async (dispatch, id) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "UPDATE_CART", payload: response.data.cart });
  } catch (error) {
    console.log(error);
    notificationError("GET ERROR");
  }
};
