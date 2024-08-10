import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant"

export const ProductList = (() => {
    return {
        type: PRODUCT_LIST,
    }
})

export const productSearch = ((query) => {
    console.log("query-------->", query);
    return {
        type: SEARCH_PRODUCT,
        query
    }
})