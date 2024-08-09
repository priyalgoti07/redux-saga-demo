import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const ProductData = ((data = [], action) => {
    console.log("data", data, action);
    switch (action.type) {
        case SET_PRODUCT_LIST:
            console.log("data", action.data);
            return [...action.data]

        default: return data;
    }
})