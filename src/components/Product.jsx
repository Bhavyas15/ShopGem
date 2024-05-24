// import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import "./Product.css";

const Product = ({post}) => {

  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();


  const Addhandler = () => {
    dispatch(add(post));
    toast.success("Item is added from cart");
  }

  const Removehandler = () => {
    dispatch(remove(post.id));
    toast.success("Item is removed from cart");
  }


  return(
    <div className="flex flex-col justify-evenly  items-center  border-solid border-2 border-gray-200 rounded-xl h-[23rem] magic hover:shadow-2xl ease-out cursor-pointer">
    <div className="flex flex-col items-center mx-3 gap-y-6  ">
      <div className=" font-bold ">
        <p>{
            post.title.split(" ").slice(0,3).join(" ")+"..."
          }</p>
      </div>
      <div className=" text-gray-600 text-[13px]">
        <p>{post.description.split(" ").slice(0,12).join(" ")+"..."}</p>
      </div>
      <div>
        <img className="h-[8rem] w-[7rem] rounded-2xl" src={post.image}></img>
      </div>
      <div className="flex gap-x-7 align-baseline">
        <div className=" text-green-700 font-extrabold text-[1.5rem]">
          $<span>{post.price}</span>
        </div >
        <div className=" text-[10px] font-semibold">
        {
          cart.some((p)=> p.id === post.id) ? 
          (<button onClick={Removehandler}
          className="border-double border-2 border-black rounded-full text-center h-[32px] w-[6rem] ">
            Remove From Cart
          </button>)
          :
          (<button onClick={Addhandler}
          className="border-dashed border-2 border-black rounded-full text-center h-[32px] w-[6rem]  ">
            Add to Cart
          </button>)
        }
        </div>
        
      </div>
    </div>
      
    </div>
  )
};

export default Product;
