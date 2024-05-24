// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import  Home from "./pages/Home";
// import Cart from "./pages/Cart";

// const App = () => {
//   return <div className="flex flex-col items-center w-full">
//     <div>
//       <Navbar/>
//     </div>
//     <div className="flex flex-col justify-center w-full">

//     <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/Cart" element={<Cart/>} />
//     </Routes>
//     </div>
//   </div>;
// };

// export default App;
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
      <div className="flex flex-col items-center">
      <Navbar />
      <div className=" flex flex-col justify-center">
        <Routes>
          <Route 
          path="/" element={<Home />} 

          />
          <Route 
          path="/cart" element={<Cart />} 
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;