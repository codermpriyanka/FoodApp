import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'
import { useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems  =useSelector((store)=>store.cart.items)
    console.log(cartItems)
    const dispatch=useDispatch()
    const handelClearCart=()=>{
        dispatch(clearCart())
    }
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>
            Cart
        </h1>
        <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handelClearCart}>Clear Cart</button>
        {cartItems.length==0 && (<h1>Cart is Empty,Add Item to it</h1>)}
        </div>
      <div>
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  )
}

export default Cart
