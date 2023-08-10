import React from 'react'
import { CDN_URL } from '../../utils/constants'

const ItemList = ({items}) => {
    console.log(items)
  return (
    <div>
     {
        items.map((item) => (
            <div key={item.card.info.id} className='p-2 m-2  border-gray-400 border-b-2 flex justify-between'>
            <div className='w-9/12'>
          <div className='py-2'>
          <span key={item.card.info.id} className='font-bold text-lg'>{item.card.info.name}</span>
            <span key={item.card.info.id} className='font-bold text-sm'> - {item.card.info.price / 100}</span>
          </div>
          <p key={item.card.info.id}>{item.card.info.description}</p>
            </div>
            
            <div className='w-3/12 p-2' >
                <div className='absolute'>
                <button className='bg-black text-white p-2 '>Add +</button>
                </div>
         
                <img src={CDN_URL + item.card.info.imageId} className='w-full'/>
                
            </div>
            
            </div>
        ))
     }
    </div>
  )
}

export default ItemList
