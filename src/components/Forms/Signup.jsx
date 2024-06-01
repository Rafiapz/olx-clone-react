import React, { useState } from "react";
import "./Signup.css";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
   const [Name, setName] = useState("");
   const [Email, setEmail] = useState("");
   const [Mobile_Number, setMobile_Number] = useState("");
   const [Password, setPassword] = useState("");

   const navigate = useNavigate();

   const handleUser = (val) => {};

   const firestore = getFirestore();

   const signUpSubmission = async (event) => {
      event.preventDefault();

      try {
         const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
         await updateProfile(auth.currentUser, { displayName: Name });
         const data = {
            username: Name,
            email: Email,
            phone: Mobile_Number,
         };
         await setDoc(doc(firestore, "users", userCredential.user.uid), data);
         handleUser(userCredential.user.displayName);
         console.log("navigating");
         navigate("/");
      } catch (error) {
         toast.error(error?.message);
         console.log(error);
      }
   };

   return (
      <div className="h-screen  bg-gradient-to-r from-green-400 to-blue-500">
         <header className=" bg-gradient-to-r from-green-400 to blue-500 mb-8">
            <h1 className="text-3xl font-bold text-center text-white">OLX Clone</h1>
         </header>
         <div className="flex flex-col items-center justify-center">
            <div className="max-w-md w-full mx-auto p-6 bg-white rounded-md shadow-md ">
               <div className="flex justify-between">
                  <h2 className="text-2xl font-semibold mb-6">Create an Account</h2>
                  <i onClick={() => navigate("/")} className="fa-regular fa-circle-xmark"></i>
               </div>
               <form>
                  <div className="mb-4">
                     <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                        Name
                     </label>
                     <input
                        onChange={(e) => setName(e.target.value)}
                        value={Name}
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                     />
                  </div>

                  <div className="mb-4">
                     <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                     </label>
                     <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={Email}
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                     />
                  </div>

                  <div className="mb-4">
                     <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                        Mobile Number
                     </label>
                     <input
                        onChange={(e) => setMobile_Number(e.target.value)}
                        value={Mobile_Number}
                        type="tel"
                        id="phone"
                        name="phone"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                     />
                  </div>

                  <div className="mb-4">
                     <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                        Password
                     </label>
                     <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={Password}
                        type="password"
                        id="password"
                        name="password"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                     />
                  </div>

                  <button
                     type="button"
                     onClick={signUpSubmission}
                     className="w-full bg-green-900 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                  >
                     Sign Up
                  </button>
                  <div className="flex mt-4">
                     <p className="mr-2">Already have an account:</p>
                     <button onClick={() => navigate("/login")} className="text-blue-500 hover:text-blue-700">
                        Login
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Signup;
