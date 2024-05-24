import { useEffect, useState, useRef,useCallback } from "react";
import Spinner from "../components/Spinner";
import Product from '../components/Product';
import "./Home.css";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [laoding, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  // const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  // const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  async function fetchProductData(){
    setloading(true);
    try{
      let res = await fetch(API_URL);
      let data = await res.json();
      console.log(data);
      setAllPosts(data);
      setposts(data.slice(0, 10));
    }
    catch{
      console.log("error");
      setposts([])
    }
    setloading(false);
  }

  // const loadMore = () => {
  //   if (laoding) return;
  //   setloading(true);
  //   setTimeout(() => {
  //     const currentLength = posts.length;
  //     const nextSet = allPosts.slice(currentLength, currentLength + 10);
  //     if (nextSet.length === 0) {
  //       // Start again from the beginning if no more data
  //       setposts((prevPosts) => [...prevPosts, ...allPosts.slice(0, 10)]);
  //     } else {
  //       setposts((prevPosts) => [...prevPosts, ...nextSet]);
  //     }
  //     setloading(false);
  //   }, 1000); // Adding a delay to simulate network request
  // };
  const loadMore = useCallback(() => {
    if (laoding) return;
    setloading(true);
    setTimeout(() => {
      const currentLength = posts.length;
      const nextSet = allPosts.slice(currentLength, currentLength + 10);
      if (nextSet.length === 0) {
        // Start again from the beginning if no more data
        setposts((prevPosts) => [...prevPosts, ...allPosts.slice(0, 10)]);
      } else {
        setposts((prevPosts) => [...prevPosts, ...nextSet]);
      }
      setloading(false);
    }, 1000); // Adding a delay to simulate network request
  }, [laoding, posts, allPosts]);

  useEffect(()=>{
    fetchProductData();
  },[loadMore])

  useEffect(() => {
    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting && !laoding) {
        // setPage((prevPage) => prevPage + 1);
        loadMore();
      }
    };

    observer.current = new IntersectionObserver(handleIntersect);
    const bottomObserver = document.querySelector('.bottom-observer');
    if (bottomObserver) observer.current.observe(bottomObserver);

    return () => {
      if (observer.current && bottomObserver) observer.current.unobserve(bottomObserver);
    };
  }, [laoding, posts]);


  return (
    <div className="flex w-screen justify-center">
      <div className="w-[1080px] flex justify-center  items-center ">
      {
        // laoding ? <Spinner/> :
        posts.length > 0 ? (
          // <div className="p-8 grid grid-cols-4 gap-x-4 gap-y-6 justify-center items-center">
          <div className="grid-container">
          {
            posts.map((post)=>(
              <Product key={post.id} post = {post}/>
            ))
          } 
          <div className="bottom-observer" style={{height:'1px'}}></div>
          {laoding && <Spinner />}
          </div>
        ):(
          <div>
            <p>No data Found</p>
          </div>
        )
      }
      </div>
    </div>
    
  )
};

export default Home;
