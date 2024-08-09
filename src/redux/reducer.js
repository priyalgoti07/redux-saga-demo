import { ADD_TO_CART, DELETE_TO_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
    // if (action.type === ADD_TO_CART) {
    //     console.log("i am if", action.data);
    //     return action.data
    // }
    // else {
    //     return "no action matched"
    // }
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data];
        case REMOVE_TO_CART:
            data.length = data.length ? data.length - 1 : data
            return [...data];
        case DELETE_TO_CART:
            data = []
            return [...data]
        default:
            return data
    }
}