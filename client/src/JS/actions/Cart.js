import {
    GET_CART_LOAD,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    ADD_CART_LOAD,
    ADD_CART_SUCCESS,
    ADD_CART_FAIL,
    GET_CART,
    UPLOAD_CART,
    EDIT_CART,
  } from "../const/Cart";
  import axios from "axios";
  export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_LOAD });
    try {
      let result = await axios.get("/Cart");
      dispatch({ type: GET_CART_SUCCESS, payload: result.data.response });
    } catch (error) {
      dispatch({ type: GET_CART_FAIL, payload: error.data });
      console.log(error);
    }
  };
  
  export const deleteCart = (id) => (dispatch) => {
    axios
      .delete(`/Cart/${id}`)
      .then((res) => dispatch(getCart()))
      .catch((err) => console.log(err));
  };
  
  export const addCart = (user) => async (dispatch) => {
    dispatch({ type: ADD_CART_LOAD });
    try {
      let result = await axios.post("/Cart/", user);
      dispatch({ type: ADD_CART_SUCCESS, payload: result.data.result });
    } catch (error) {
      dispatch({ type: ADD_CART_FAIL, payload: error });
      console.log(error);
    }
  };
  export const getoneCart = (id) => (dispatch) => {
    axios
      .get(`/Cart/${id}`)
      .then((res) => dispatch({ type: GET_CART, payload: res.data.response }))
      .catch((err) => console.log(err));
  };
  
  export const uploadCart = (id) => (dispatch) => {
    axios
      .put(`/Cart/${id}`)
      .then((req) => dispatch({ type: UPLOAD_CART, payload: req.body }))
      .catch((err) => console.log(err));
  };

  export const editCart = (id,newcart) => (dispatch) => {
    axios
      .put(`/Cart/${id}`,newcart)
      .then((req) => dispatch({ type: EDIT_CART, payload: req.body }))
      .catch((err) => console.log(err));
  };