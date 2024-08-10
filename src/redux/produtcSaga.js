import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

//Worker saga
function* getProducts() {
    let data = yield fetch("http://localhost:3005/Products")
    data = yield data.json()
    yield put({ type: SET_PRODUCT_LIST, data })
}
function* SearchProducts(data) {
    let searchData = yield fetch(`http://localhost:3005/Products?category=${data.query}`)
    searchData = yield searchData.json()
    console.log("i am Dta", searchData);
    yield put({ type: SET_PRODUCT_LIST, data: searchData })
}
//Watcher saga
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, SearchProducts)
}
export default productSaga;