import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Addtocart, Deletetocart, Removetocart } from './redux/action'
import { ProductList } from './redux/productAction'

function App() {
  const dispatch = useDispatch();
  const AllreducerData = useSelector(state => state)
  console.log("AllreducerData", AllreducerData);
  const product = {
    phone: "Iphone",
    type: "Mobile",
    price: 100000,
    color: "silver"
  }
  return (
    <>
      <div>
        <button onClick={() => dispatch(Addtocart(product))}>AddTocart</button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch(Removetocart(product))}>RemoveTocart</button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch(Deletetocart(product))}>DeleteTocart</button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch(ProductList())}>Get Product</button>
      </div>

      <div className='product-container'>
        {
          AllreducerData?.ProductData.map((item, index) => {
            return (
              <div div className='product-item' key={index} >
                <img src={item.photo} alt={item.category} />
                <div>Name: {item.name}</div>
                <div>Color: {item.color}</div>
                <div>Brand: {item.brand}</div>
                <div>Price: {item.price}</div>
                <div>Category: {item.category}</div>
              </div>
            )

          })
        }
      </div >
    </>
  )
}

export default App
