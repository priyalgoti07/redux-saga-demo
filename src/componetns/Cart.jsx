import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'

export const Cart = () => {
    const cartData = useSelector(state => state.cartData)
    let amount = cartData.length && cartData.map((item) => item.price).reduce((prev, next) => prev + next)
    console.log("amount--->", amount);
    console.log("cartData------>", cartData);
    return (
        <div>
            <Link to={'/'}>
                <p>Go To ProductList</p>
            </Link>
            <h1>Crat Page</h1>
            <div className='cart-page-container'>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Color</td>
                        <td>Price</td>
                        <td>Brand</td>
                        <td>category</td>
                    </tr>
                    {cartData.map((item) =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.color}</td>
                            <td>{item.price}</td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>
                        </tr>
                    )}
                </table>
                <div className='price-details'>
                    <div className='adjust-price'><span>Aomunt</span><span>{parseFloat(amount).toFixed(2)}</span></div>
                    <div className='adjust-price'><span>Discount</span><span>{parseFloat(amount / 10).toFixed(2)}</span></div>
                    <div className='adjust-price'><span>Tex</span><span>0000</span></div>
                    <div className='adjust-price'><span>Total</span><span>{parseFloat(amount - (amount - 10)).toFixed(2)}</span></div>
                </div>
            </div>
        </div>
    )
}
