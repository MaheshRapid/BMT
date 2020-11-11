import {apiconfig} from '../../../constants/apiconfig';
import axios from 'axios';
import {cart_list_add, cart_list_cancel,cart_bag, cart_qty,cart_final_submit} from './actioncontants';

export const addcart = ({product}) => {
  //  console.log("cartaction",product)
  return {
    type: cart_list_add,
    product,
  };
};

export const cancelcart = ({product_id}) => {
  // console.log(product_id)
  return {
    type: cart_list_cancel,
    product_id,
  };
};

export const qtycart = ({pid, m, d, range}) => {
  const data = {
    product_id: pid,
    mrp: m,
    sprice: d,
    quantity: range,
  };
  console.log("---------action----------------------",data)
  return {
    type: cart_qty,
    data,
  };
};


export const bagcart = ({pid,bag}) => {
  console.log("bagaction",bag)
  const data = {
    product_id: pid,
    bagssss:bag
  };
  return {
    type: cart_bag,
    data,
  };
};


export const final_cart_submit = () => {
  // console.log(product_id)
  return {
    type: cart_final_submit,
  };
};
