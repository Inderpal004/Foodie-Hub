import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import CategoryMenu from '../Components/CategoryMenu/CategoryMenu'
import FoodItem from '../Components/FoodItem/FoodItem'
import Cart from '../Components/Cart/Cart'

export default function Home() {
  return (
    <>
    <Navbar/>
    <CategoryMenu/>
    <FoodItem/>
    <Cart/>
    </>
  )
}
