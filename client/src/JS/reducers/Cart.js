import {
    GET_CART_LOAD,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    GET_CART,
    UPLOAD_CART,
    ADD_CART_LOAD,
    ADD_CART_SUCCESS,
    ADD_CART_FAIL,
  } from "../const/Cart";
  const initstate = {
    Carts: [],
    loadCarts: false,
    errors: null,
    user: {},
  };
  
  export const Cartreducer = (state = initstate, { type, payload }) => {
    switch (type) {
      case GET_CART_LOAD:
        return { ...state, loadCarts: true };
      case GET_CART_SUCCESS:
        return { ...state, Carts: payload, loadCarts: false };
      case GET_CART_FAIL:
        return { ...state, loadCarts: false, errors: payload };
      case ADD_CART_LOAD:
        return { ...state, loadCarts: true };
      case ADD_CART_SUCCESS:
        return { ...state, Carts: payload, loadCarts: false };
      case ADD_CART_FAIL:
        return { ...state, loadCarts: false, errors: payload };
      case GET_CART:
        return { ...state, user: payload };
      case UPLOAD_CART:
        return { ...state, user: payload };
      default:
        return state;
    }
  };