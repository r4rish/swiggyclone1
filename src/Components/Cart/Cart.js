import React from 'react'
import ItemList from '../Body/RestaurantMenuCards/ItemList'
import CartList from "./CartList"
import { clearItem } from '../utils/CartSlice'
import { useSelector , useDispatch } from 'react-redux'

const Cart = () => {


  const store = useSelector((store) => store);
const cartItems = store.cart.items;

const dispatch = useDispatch()

const handleClearCart = () => {
  dispatch(clearItem())
}

  return (
    <div className='text-center'>
     <div className='text-xl font-bold '>Cart</div>
     <div><button className='text-xl font-bold bg-black text-white rounded-lg' onClick={handleClearCart}>Clear Cart</button></div>
     <div className='w-6/12 m-auto'>{cartItems.length === 0 && <h1>Cart is Empty</h1>}
      <CartList items={cartItems}/>
     
     </div>
    </div>
  )
}

export default Cart
