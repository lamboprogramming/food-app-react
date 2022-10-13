import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'


const Navbar = () => {

  const [nav, setNav] = useState(false)

  
  return ( 
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center">
        <div onClick={()=> setNav(!nav)}className="cursor-pointer">
          <AiOutlineMenu size={30} />
    </div>
    <h1 className="px-2 text-2xl sm:text-3xl mlg:text-4xl">
      Best <span className="font-bold">Eats</span>
    </h1>
    <div className="items-center hidden lg:flex bg-gray-200 rounded-full p-1 text-[14px]">
        <p className="text-white bg-black rounded-full">Delivery</p>
        <p className="p-2">Pickup</p>
       </div>
     </div>

    { /* Search */}
    <div className="flex items-center px-2 rounded-full ng-gray-200 w-[200px] sm:w[400px] lg:w-[500px]">
      <AiOutlineSearch size={20} />
      <input className="w-full p-2 bg-transparent focus:outline-none" type="text" placeholder="Search foods"></input>
    </div>

    {/* Cart Button */}
      <button className="items-center hidden py-2 text-white bg-black rounded-full md:flex">
        <BsFillCartFill size={20} className="mr-2 "/> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black/80"></div> : ''}
      
      {/* Side drawer menu */}
      <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"  }>
      <AiOutlineClose
      onClick={() => setNav(!nav)} size={30} className="absolute cursor-pointer right-4 top-4"/>
      <h2 className="px-4 text-2l">
      Best <span className="font-bold">Eats</span></h2>
      <nav>
        <ul className="flex flex-col p-4 text-gray-800">
          <li className="flex py-4 text-xl"><TbTruckDelivery size={25} className="mr-4"/>Orders</li>

          <li className="flex py-4 text-xl"><MdFavorite size={25} className="mr-4"/> Favorites</li>

          <li className="flex py-4 text-xl"><FaWallet size={25} className="mr-4" /> Wallet </li>

          
          <li className="flex py-4 text-xl"><MdHelp size={25} className="mr-4"/> Help</li>
          
          <li className="flex py-4 text-xl"><AiFillTag size={25} className="mr-4" /> Promotions </li>
          
          <li className="flex py-4 text-xl"><BsFillSaveFill size={25} className="mr-4"/>Best Ones</li>
          
          <li className="flex py-4 text-xl"><FaUserFriends size={25} className="mr-4"/> Invite Friends</li>
          
         
        </ul>
      </nav>
      </div>
    </div>


  ); 
};

export default Navbar