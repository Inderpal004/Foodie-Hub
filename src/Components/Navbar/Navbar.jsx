import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../Redux/Slices/SearchSlice';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
    const dispatch = useDispatch();
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    
    return (
        <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
            <div>
                <h3 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0, 16)}</h3>
                <h1 className=" font-bold text-xl mb-4 lg:text-2xl">Foodie Hub, {isAuthenticated ? <>Welcome {user.name}</> : <>Please Login !!</>}</h1>
            </div>
            <div>
                <input type="search" name='search' onChange={(e) => dispatch(setSearch(e.target.value))} placeholder='Search here' autoComplete='off' className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-[60vw] lg:w-[25vw]" />
              
              {
                isAuthenticated ?    <button className=" text-white py-3 px-4 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  text-center  mx-2" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out </button> : <button type="button" onClick={() => loginWithRedirect()} className=" text-white py-3 px-4 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  text-center  mx-2">Log In</button>
              } 
               
            </div>

        </nav>
    )
}
