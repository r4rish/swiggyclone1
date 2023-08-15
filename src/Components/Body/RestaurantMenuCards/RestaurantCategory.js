import React, { useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const RestaurantCategory = ({data , showItems , setShowIndex , index}) => {
//   const RestaurantCategory = ({data }) => {
//  const [ showItems , setShowItems] = useState(false);
    //console.log(data);


const handleClick = () => {
 
//setShowItems(!showItems)
setShowIndex(index)

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
