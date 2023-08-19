import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch , useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/CartSlice';

const CartList = () => {

    const store = useSelector((store) => store);
    const cartItems = store.cart.items;

    const dispatch = useDispatch()

    const handleAddItems = (item) => {
        dispatch(addItem(item))
    }
    const handleremoveItems = (item) => {
        dispatch(removeItem(item))
    }

  return (
    <div>
     {
        cartItems.map((item) => (
            <div key={item.card.info.id} className='p-2 m-2  border-gray-400 border-b-2 flex justify-between'>
            <div className='w-9/12'>
          <div className='py-2'>
          <span  className='font-bold text-lg'>{item.card.info.name}</span>
            <span key={item.card.info.id} className='font-bold text-sm'> - Rs {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100} </span>
          </div>
          <p >{item.card.info.description}</p>
            </div>
            
            <div className='w-3/12 p-2' >
                <div className='w-1/12 absolute flex justify-between'>
                <button className='bg-black text-white p-2 ' onClick={() => handleAddItems(item)}>+</button>
                <h1>{cartItems.length}</h1>
                <button className='bg-black text-white p-2 ' onClick={() => handleremoveItems(item)}>-</button>
                </div>
         
                <img src={CDN_URL + item.card.info.imageId} className='w-full'/>
                
            </div>
            
            </div>
        ))
     }
    </div>
  )
}

export default CartList
