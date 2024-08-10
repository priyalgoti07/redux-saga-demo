import { SET_PRODUCT_LIST } from "./constant";

export const ProductData = ((data = [], action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return [...action.data]

        default: return data;
    }
})