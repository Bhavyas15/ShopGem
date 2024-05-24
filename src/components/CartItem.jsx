import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({item,itemindex}) => {


  const dispatch = useDispatch();

  const removefromcart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");
  }


  return (
    <div className="w-full  border-b-4 border-black flex gap-x-3  justify-center items-center ">
      <div className="flex flex-row h-[20rem]">
        <div >
          <img className="h-[16rem] w-[24rem]" src={item.image} alt="cart_img"></img>
        </div>

        <div className="">
          <div ><h1>{item.tile}</h1></div>
          <div><h1>{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1></div>
          
          <div className="flex flex-row">
            <p>{item.price}</p>
            <div onClick={removefromcart}>
            <AiFillDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
