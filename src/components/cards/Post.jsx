import React, { createContext, useContext, useEffect, useState } from "react";
import "./Post.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../store/PostContext";

export const postContext = createContext();

function Post() {
   const [products, setProduct] = useState([]);

   const { setPostDetails } = useContext(PostContext);

   const navigate = useNavigate();

   const fetchData = async () => {
      try {
         const items = collection(db, "products");
         const productsSnapshot = await getDocs(items);
         const productList = productsSnapshot.docs.map((doc) => {
            return {
               ...doc.data(),
               id: doc.id,
            };
         });
         console.log(productList);
         setProduct(productList);
      } catch (error) {
         console.log("fetch err", error);
      }
   };

   useEffect(() => {
      fetchData();
      return () => {};
   }, []);

   const viewPost = (obj) => {
      setPostDetails(obj);
      navigate(`/view?id=${obj.id}`);
   };

   return (
      <>
         <div className="h-14"></div>
         <div className="post-container  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {products.map((obj) => {
               return (
                  <div key={obj.createdAt} className="post h-72 bg-blue-50" onClick={() => viewPost(obj)}>
                     <div className="post-image " style={{ backgroundImage: `url(${obj.imageUrl})` }}>
                        <div className="wishlist-icon">
                           <i className="fa-regular fa-heart"></i>
                        </div>
                     </div>
                     <h1 className="amount">₹ {obj.price ?? obj.price} </h1>
                     <h3 style={{ marginLeft: "15px" }}>{obj.title} </h3>
                     <h5 style={{ marginLeft: "15px" }}>{obj.description} </h5>
                  </div>
               );
            })}
         </div>
      </>
   );
}

export default Post;
