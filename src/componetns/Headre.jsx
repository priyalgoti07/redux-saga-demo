import "../App.css"
import React from 'react'
import cartSVG from "../assets/cart.svg"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productSearch } from '../redux/productAction'

export const Headre = () => {
    const resultCart = useSelector(state => state.cartData);
    const dispatch = useDispatch();
    return (
        <div className='headre'>
            <Link to="/">
                <h1 style={{ float: "left", padding: "25px" }}>E-come</h1>
            </Link>
            <div style={{ paddingTop: "35px", float: "left", width: "50%" }}>
                <input type='text'
                    onChange={(event) => dispatch(productSearch(event.target.value))}
                    placeholder='Search Product' style={{ width: "100%", height: "30px", border: "1px solid #777", paddingLeft: "10px", fontSize: "20px" }} />
            </div>
            <Link to='/cart'>
                <div className='cart-div'>
                    <span className='count-div'>{resultCart.length}</span>
                    <img src={cartSVG} />
                </div>
            </Link>

        </div>
    )
}
