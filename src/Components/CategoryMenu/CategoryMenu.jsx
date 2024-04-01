import React,{useEffect, useState} from 'react';
import FoodData from '../../data/FoodData';
import { setCategory } from '../../Redux/Slices/CategorySlice';
import { useDispatch ,useSelector} from 'react-redux';

export default function CategoryMenu() {

  const [categories,setCategories] = useState([]);

  const listUniqueCategories = ()=>{
    const uniqueCategories = [...new Set(FoodData.map((food)=> food.category)) ];
    setCategories(uniqueCategories); 
    console.log(categories);
  }

  useEffect(()=>{
    listUniqueCategories();
  },[])

  const dispatch = useDispatch();
  const selectedCategory = useSelector(state=> state.category.category)

  return (
    <div className="ml-6">
        <h3 className="text-xl font-semibold">Find the Best Food</h3>
        <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
            <button onClick={()=> dispatch(setCategory("All"))} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`}>All</button>
            {
              categories.map((category,index)=>{
                return <button key={index} onClick={()=> dispatch(setCategory(category))} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}>{category}</button>
              })
            }
        </div>
    </div>
  )
}
