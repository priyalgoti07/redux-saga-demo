import { PRODUCT_LIST, SEARCH_PRODUCT } from "./constant"

export const ProductList = (() => {
    return {
        type: PRODUCT_LIST,
    }
})

export const productSearch = ((query) => {
    return {
        type: SEARCH_PRODUCT,
        query
    }
})