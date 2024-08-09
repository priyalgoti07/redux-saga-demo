import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./redux/constant";

//Worker saga
function* getProducts() {
    let data = yield fetch("http://localhost:3005/Products")
    data = yield data.json()
    yield put({ type: SET_PRODUCT_LIST, data })
}

//Watcher saga
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
}
export default productSaga;