import { useEffect, useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Addtocart, Removetocart } from './action'
import { ProductList } from './productAction';
import { Deletetocart } from './action';

function Appsecond() {
  const dispatch = useDispatch();
  const AllreducerData = useSelector(state => state)
  console.log("AllreducerData-------->",AllreducerData);
  useEffect(() => {
    dispatch(ProductList())
  }, [])
  return (
    <>
      
    
      <div>
        <button onClick={() => dispatch(Deletetocart(product))}>DeleteTocart</button>
      </div> 
      <br />
      <div className='product-container'>
        {
          AllreducerData?.ProductData.map((item, index) => {
            return (
              <div div className='product-item' key={item.id} >
                <img src={item.photo} alt={item.category} />
                <div>Name: {item.name}</div>
                <div>Color: {item.color}</div>
                <div>Brand: {item.brand}</div>
                <div>Price: {item.price}</div>
                <div>Category: {item.category}</div>
                <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBlock: "10px" }}>
                  <button onClick={() => dispatch(Addtocart(item))}>Add to Cart</button>
                  <button onClick={() => dispatch(Removetocart(item.id))}>RemoveTocart</button>
                </div>
              </div>
            )

          })
        }
      </div >
    </>
  )
}

export default Appsecond
