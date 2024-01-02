import React, { createContext, useContext, useEffect, useState } from 'react'
import './Post.css'
import { collection, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'
import { PostContext } from '../../hooks/PostContext'

export const postContext=createContext()

function Post() {

    const [products, setProduct] = useState([])
    
    const {setPostDetails}=useContext(PostContext)

    const navigate=useNavigate()

    useEffect(() => {

        (async function fetchData() {
            const items = collection(db, 'products');
            const productsSnapshot = await getDocs(items);
            const productList = productsSnapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
            console.log(productList);
            setProduct(productList)

        })()



        return () => {

        }
    }, [])

    const viewPost=(obj)=>{
        setPostDetails(obj)
        console.log(obj);
        navigate('/view')
    }

  

    return (
        <div className='post-container' >

            {products.map((obj) => {

                return (
                    <React.Fragment key={obj.createdAt}  >

                        <div className='post' onClick={()=>viewPost(obj)} >
                            <div className='post-image' style={{ backgroundImage: `url(${obj.imageUrl})` }} >
                                <div className='wishlist-icon' >
                                    <i className="fa-regular fa-heart"></i>
                                </div>

                            </div>
                            <h1 className='amount' >₹ 31000</h1>
                            <h5>iPhone 14 pro refurbished sale on </h5>
                            <p>Samudrapur, Maharashtra</p>
                        </div>
                    </React.Fragment>
                )
            })}




        </div>
    )
}

export default Post