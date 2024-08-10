import { ADD_TO_CART, DELETE_TO_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
    // console.log("data", data, action);
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data];
        case REMOVE_TO_CART:
            const removeData = data.filter((item) => item.id !== action.data)
            console.log("remove----->", removeData);
            return [...removeData];
        case DELETE_TO_CART:
            data = []
            return [...data]
        default:
            return data
    }
}