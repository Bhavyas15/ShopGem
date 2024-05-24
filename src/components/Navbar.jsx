import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return(
    <div className="sticky top-0 z-50 bg-slate-900 w-screen items-center justify-center flex">
      <div className="flex flex-row justify-between mx-10 items-center text-white h-[4rem] align-middle w-[1080px] bg-slate-900 ">
        <NavLink to="/">
          <div className="fl">
            {/* <div> */}
              <img src="sglogo.png" className="h-[3.7rem] w-[3.8rem]" ></img>
              <div className="n">SHOPGEM</div>
            {/* </div> */}
          </div>
            
        </NavLink>
        <div className=" flex flex-row justify-evenly w-[10rem] text-[1.5rem] position-fixed">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
          <NavLink to="/cart" className="p-2">
          <FaShoppingCart />
          </NavLink>  
            {/* <div className="eles">1</div> */}
          
        </div>
      </div>
    </div>
  )
};

export default Navbar;
