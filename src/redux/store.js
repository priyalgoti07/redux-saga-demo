// import { createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"
import createSagaMiddleware from "redux-saga"
import productSaga from "./produtcSaga";

// const store = createStore(rootReducer)
const sagaMidellware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: ()=>[sagaMidellware]
})
sagaMidellware.run(productSaga)
export default store