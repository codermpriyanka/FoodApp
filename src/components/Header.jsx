import React, { useState } from 'react'
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {

  const[btnnameReact,setBtnNameReact]=useState("Login");
  const onlineStatus=useOnlineStatus()
  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems)

  return (
    <div className='flex justify-between bg-blue-400 shadow-lg'>
        <div className='logo-container'>
            <img className="h-20 rounded-full m-2" src={LOGO_URL}></img>
        </div>
        <div className='flex items-center'>
            <ul className='flex p-4 m-4'>
              <li className='font-bold'>Online Status:{onlineStatus?"✔":"🔴"}</li>
                <li className='px-10 font-bold'>
                  <Link to ='/'> Home</Link>
                  </li>
                <li className='px-10 font-bold'><Link to ='/about'>About US</Link></li>
                {/* <li className='px-10 font-bold'> <Link to = '/contact'> Contact  Us</Link></li> */}
                <li className='px-10 font-bold'><Link to ='/cart'>Cart - ({cartItems.length}items)</Link></li>

                <button onClick={()=>{btnnameReact=="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")}} className='font-bold login_button'>{btnnameReact}</button>
            </ul>
        </div>
        
      
    </div>
  )
}

export default Header
