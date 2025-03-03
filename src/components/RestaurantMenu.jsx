import React, { useState,useEffect } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import {MENU_API} from "../utils/constants"
import useRestaurantmenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {
    const{resId}=useParams();
    const resInfo=useRestaurantmenu(resId)
  
    // const fetchMenu=async ()=>{
    //     const data=await fetch(MENU_API+resId)
    //     const json=await data.json();
    //     // console.log(json)
    //     // console.log(json.data)
    //     console.log(json.data.cards[0].card.card.text)
    //     console.log(json.data.cards[0]?.card?.card?.info?.name)

    //     setResInfo(json.data);
    // }

    if(resInfo==null){
      return (<Shimmer></Shimmer>)
    }
    console.log(resInfo)

    const restaurantInfo = resInfo?.cards?.find(card => card.card?.card?.info);
    const { name, cuisines, costForTwo } = restaurantInfo?.card?.card?.info || {};

    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>c.card?.["card"]?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        console.log("hello")
        console.log(categories)
        console.log("fghjk")
       return (
    <div className='text-center'>
    <h1 className='font-bold my-6 text-2xl'>{name}</h1>
    <p className='font-bold text-lg'>{cuisines?.join(", ")}</p>
    <p className='font-bold text-lg'>Cost for two- {costForTwo}</p>
    {/* <p>{itemCards[0].card.info.name}</p> */}
    {/* <p>{itemCards.map((item)=>(<li key={item.card.info.id}>{item.card.info.name}-{item.card.info.defaultPrice}</li>))}</p> */}
    {/* Render other menu items here */}
    <p>{categories.map((category)=><RestaurantCategory data={category?.card?.card}/>)}</p>
  
   </div>
  )
}

export default RestaurantMenu



