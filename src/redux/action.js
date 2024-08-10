import { ADD_TO_CART, DELETE_TO_CART, REMOVE_TO_CART } from "./constant";
export const Addtocart = (data) => {
    return {
        type: ADD_TO_CART,
        data
    }
}

export const Removetocart = (data) => {
    console.log("datainAction------->",data);
    return {
        type: REMOVE_TO_CART,
        data: data
    }
}

export const Deletetocart = (data) => {
    return {
        type: DELETE_TO_CART,
        data: data
    }
}