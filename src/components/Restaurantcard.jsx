import React from 'react'
import {CDN_URL} from '../utils/constants'

const Restaurantcard = (props) => {
  const{resData}=props
  const{
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  }=resData?.info;
  return (
    <div className='m-6  p-4 w-[250px] rounded-lg  bg-pink-100 hover:bg-blue-300'>
      
              <img alt="res-log" className='res-logo' 
              src={CDN_URL+cloudinaryImageId}/>
            
             <h3 className='font-bold py-4 text-lg'>{name}</h3>
             <h4 className='font-medium break-words'>{cuisines.join(",")}</h4>
             <h4 className='font-medium'>{avgRating}</h4>
             <h4 className='font-medium'>{costForTwo}</h4>
        
    </div>
  )
}
export default Restaurantcard

