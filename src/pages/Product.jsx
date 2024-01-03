import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/header/Header'
import { PostContext } from '../hooks/PostContext'
import { Query, collection, doc, getDoc, getDocs, where } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useSearchParams } from 'react-router-dom'
import Footer from '../components/footer/Footer'


function Product() {

    const [user, setUser] = useState()
    const [product, setProduct] = useState()
    const [query] = useSearchParams()


    const handleFetchDoc = async () => {
        try {

            const id = query.get('id')
            const docRef = doc(db, "products", id);

            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProduct(docSnap.data());
                console.log(docSnap.data());
                const userId = docSnap.data().userId;
                const userDocRef = doc(db, "users", userId);

                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                    setUser(userDocSnap.data());
                    console.log(userDocSnap.data());

                } else {
                    throw "user doesn't exist";
                }
            } else {
                throw "doc is not exist";
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        handleFetchDoc()

        return () => {

        }
    }, [])



    return (
        <>
            <Header />
            <div className="w-full h-screen flex px-12 py-10 gap-4 bg-slate-100">
                <div className="img-container w-[60%] p-20 bg-white shadow-xl">
                    <div style={{ backgroundImage: `url(${product?.imageUrl})`, backgroundSize: 'contain', width: '100%', height: '400px', backgroundRepeat: 'no-repeat' }} ></div>
                </div>
                <div className="details-container w-[40%] flex flex-col gap-4">
                    <div className="product-details w-full shadow-xl flex flex-col items-start px-4 py-8 bg-white">
                        <div className="w-full flex items-center justify-between">
                            <h2 className="text-2xl">₹{product?.price}</h2>
                            <img src="/icons/love.png" alt="" className="w-8" />
                        </div>
                        <h2 className="text-lg font-normal mt-2"></h2>
                        <h1 className="text-xl font-light">{product?.title}</h1>
                    </div>
                    <div className="user-details w-full shadow-xl flex flex-col items-start px-4 py-8 gap-2 bg-white">
                        <div className="w-full flex items-center justify-between px-4 py-4 border rounded">
                            <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="" className="w-8" />
                            <h2>{user?.username}</h2>
                            <img src="/icons/left.png" alt="" className="rotate-180 w-8" />
                        </div>
                        <button className="w-full py-2 px-4 text-sm border-2 rounded">Chat with seller</button>
                    </div>
                </div>
            </div>
            <Footer />

        </>

    )
}

export default Product