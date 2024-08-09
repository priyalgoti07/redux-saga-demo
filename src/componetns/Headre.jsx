import React from 'react'
import cartSVG from "../assets/cart.svg"
import "../App.css"
import { useSelector } from 'react-redux'

export const Headre = () => {
    const resultCart = useSelector(state => state.cartData)
    return (
        <div className='headre'>
            <div className='cart-div'>
                <span className='count-div'>{resultCart.length}</span>
                <img src={cartSVG} />
            </div>
        </div>
    )
}
