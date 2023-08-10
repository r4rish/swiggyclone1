import React, { useState } from 'react'
import ItemList from "./ItemList"

const RestaurantCategory = ({data}) => {
const [showbtn , setShowBtn] =useState(false);

    console.log(data)
const handleClick = () => {
setShowBtn(!showbtn)
}

  return (
    <>
    <div className='w-6/12 mx-auto my-4 bg-gray-200 shadow-lg text-left px-3 cursor-pointer' onClick={handleClick}>
      <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
      {showbtn && <ItemList items={data.itemCards}/>}
    </div></>
  )
}

export default RestaurantCategory
