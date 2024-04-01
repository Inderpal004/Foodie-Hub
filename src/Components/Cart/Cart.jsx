import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import ItemCard from '../ItemCard/ItemCard';
import { useSelector } from 'react-redux';
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

export default function Cart() {

  const [activeCart, setActiveCart] = useState(false);
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total,item) => total + item.qty * item.price,0)

  return (
    <>
      <div className={`fixed right-0 top-0 w-full md:w-[40vw] lg:w-[20vw] h-full p-5 bg-white mb-3 transition-all duration-500 z-50 ${activeCart ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose onClick={() => setActiveCart(prev => !prev)} className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
        </div>

        {
          cartItems.length > 0 ? cartItems.map((food) => {
            return <ItemCard key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
          }) : <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        }

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount : {totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button onClick={()=> navigate("/success")} className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] md:w-[35vw] lg:w-[18vw] mb-5">Checkout</button>
        </div>
      </div>

      <TiShoppingCart onClick={() => setActiveCart(prev => !prev)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer ${totalQty > 0 && "animate-bounce delay-500 transition-all" }`} />
    </>
  )
}
