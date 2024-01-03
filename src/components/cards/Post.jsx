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

    useEffect(() => {
        (async function fetchData() {
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
        })();

        return () => {

        };
    }, []);

    const viewPost = (obj) => {
        setPostDetails(obj);
        navigate(`/view?id=${obj.id}`);
    };

    return (
        <div className="post-container ">
           
            {products.map((obj) => {
                return (
                    <React.Fragment key={obj.createdAt}>
                        <div className="post" onClick={() => viewPost(obj)}>
                            <div
                                className="post-image"
                                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                            >
                                <div className="wishlist-icon">
                                    <i className="fa-regular fa-heart"></i>
                                </div>
                            </div>
                            <h1 className="amount">₹ {obj.price ?? obj.price} </h1>
                            <h3 style={{marginLeft:'15px'}} >{obj.title} </h3>
                            <h5 style={{marginLeft:'15px'}} >{obj.description} </h5>
                            
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default Post;
