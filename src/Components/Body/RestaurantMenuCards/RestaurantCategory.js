import React, { useState } from 'react'
import ItemList from './ItemList';


const RestaurantCategory = ({data , showItems , setShowIndex}) => {


   // console.log(data)
const handleClick = () => {
//setShowItems(!showItems)
setShowIndex();
}

  return (
    <>
    <div className='w-6/12 mx-auto my-4 bg-gray-200 shadow-lg text-left px-3 cursor-pointer' onClick={handleClick}>
      <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
      {showItems && <ItemList items={data.itemCards}/>}
    </div></>
  )
}

export default RestaurantCategory
