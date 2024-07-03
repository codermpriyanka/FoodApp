import React from 'react'
import { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data}) => {
  const[showItems,setShowItems]=useState(false)
  const handelClick=()=>{
    setShowItems(!showItems)
  }
  return (
    <div>
      <div className='w-6/12 bg-gray-50 shadow-lg mx-auto my-4 p-4'>
      <div className='flex justify-between cursor-pointer' onClick={handelClick}>
      <span className='font bold text-lg'>{data.title}({data.itemCards.length})</span>
      <spn>⏬</spn>
      </div>
        {showItems && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  )
}

export default RestaurantCategory
