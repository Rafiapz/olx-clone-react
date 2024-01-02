import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/header/Header'
import { PostContext } from '../hooks/PostContext'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'


function Product() {

    const [userDetails, setUserDetails] = useState(null)

    const { postDetails } = useContext(PostContext)

    const fetchData=async ()=>{
        console.log(postDetails);
        setUserDetails(postDetails.userId)

        const citiesCol = collection(db, 'products');
        
        const queryy = query(citiesCol, where('userId', '==', postDetails.userId));
        console.log(userDetails);

        const citySnapshot = await getDocs(queryy);
        const cityList = citySnapshot.docs.map(doc => doc.data());
     
        console.log(cityList);
        return cityList;
    }

    useEffect(() => {

        fetchData()

        return () => {

        }
    }, [])



    return (
        <>
            <Header />
            <div className="w-full h-screen flex px-12 py-10 gap-4 bg-slate-100">
                <div className="img-container w-[60%] p-20 bg-white shadow-xl">
                    <img src="https://image.tmdb.org/t/p/original/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg" alt="" className="w-full" />
                </div>
                <div className="details-container w-[40%] flex flex-col gap-4">
                    <div className="product-details w-full shadow-xl flex flex-col items-start px-4 py-8 bg-white">
                        <div className="w-full flex items-center justify-between">
                            <h2 className="text-2xl">₹</h2>
                            <img src="/icons/love.png" alt="" className="w-8" />
                        </div>
                        <h2 className="text-lg font-normal mt-2">asdf</h2>
                        <p className="text-xs font-light">asdfasd</p>
                    </div>
                    <div className="user-details w-full shadow-xl flex flex-col items-start px-4 py-8 gap-2 bg-white">
                        <div className="w-full flex items-center justify-between px-4 py-4 border rounded">
                            <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="" className="w-8" />
                            <h2>asdfl</h2>
                            <img src="/icons/left.png" alt="" className="rotate-180 w-8" />
                        </div>
                        <button className="w-full py-2 px-4 text-sm border-2 rounded">Chat with seller</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Product