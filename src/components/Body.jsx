import React from 'react';
import Restaurantcard from './Restaurantcard';
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const[listOfRestaurants,setListofRestaurants]=useState([])
  const[filteredRestaurant,setFilteredRestaurant]=useState([])
  const[searchText,setSearchtext]=useState('')
  
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async()=>{
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json= await data.json()
    console.log(json)
    console.log("hello g")
    
        // const restaurantGridListing = json?.data?.cards?.find(card => card.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
         const restaurantGridListing =json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.['restaurants']
        const restaurant_info = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.['restaurants']
        console.log(restaurant_info)
        setListofRestaurants(restaurantGridListing)
        setFilteredRestaurant(restaurantGridListing)

  }
  
  const onlineStatus=useOnlineStatus();
  // json?.data?.cards?.card[1]?.

  if(onlineStatus==false){
    return(
      <h1>Looks You are offline!!Please check your internet connection...</h1>
    )

  }
  return listOfRestaurants.length==0?(<Shimmer/>):(
   
    <div className='body'>
      <div className='filter flex'>
        <div className='search ml-5 flex items-center'>
          <input type="text" placeholder='Search please' className='search-box py-2 bg-green-100 rounded-lg'value={searchText} onChange={(e)=>setSearchtext(e.target.value)}></input>
        </div>
        <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={()=>{const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log("Clicked")
        setFilteredRestaurant(filteredRestaurant)
      }}>Search</button>

        <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={()=>{const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4)
        console.log("clicked")
          setFilteredRestaurant(filteredList)
        }}>Top Rated Restaurants</button>
     
      
      </div>
      <div className='flex flex-wrap'>
        {filteredRestaurant.map((restaurant)=>(
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><Restaurantcard resData={restaurant}/> </Link>
         
        ))}       
      </div>  
    </div>
  )
}

export default Body;

