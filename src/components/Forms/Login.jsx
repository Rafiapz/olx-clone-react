import React, { useContext, useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";
import toast from "react-hot-toast";

function Login() {
   const { isLoggedIn, user, setUser } = useContext(AuthContext);

   const navigate = useNavigate();
   const [Email, setEmail] = useState();
   const [Password, setPassword] = useState();

   const handleLoginToOlx = async (e) => {
      e.preventDefault();
      try {
         await signInWithEmailAndPassword(auth, Email, Password);
         setUser(true);
         navigate("/");
      } catch (err) {
         toast.error(err?.message)
         console.log(err);
      }
   };

   return (
      <>
         <div className="h-screen  bg-gradient-to-r from-green-400 to-blue-500">
            <header className=" bg-gradient-to-r from-green-400 to blue-500 mb-8">
               <h1 className="text-3xl font-bold text-center text-white">OLX Clone</h1>
            </header>
            <div className="flex flex-col items-center justify-center ">
               <div className="max-w-md mx-auto mt-8 p-6 rounded-md bg-white w-1/3">
                  <div className="flex justify-between">
                     <h2 className="text-2xl font-semibold mb-6 ">Login to Your Account</h2>
                     <i onClick={() => navigate("/")} className="fa-regular fa-circle-xmark "></i>
                  </div>

                  <form className="">
                     <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                           Username or Email
                        </label>
                        <input
                           type="text"
                           id="username"
                           name="username"
                           className="mt-1 p-2 w-full border rounded-md"
                           required
                           onChange={(e) => {
                              setEmail(e.target.value);
                           }}
                           value={Email}
                        />
                     </div>

                     <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                           Password
                        </label>
                        <input
                           type="password"
                           id="password"
                           name="password"
                           className="mt-1 p-2 w-full border rounded-md"
                           required
                           onChange={(e) => {
                              setPassword(e.target.value);
                           }}
                           value={Password}
                        />
                     </div>

                     <button
                        onClick={handleLoginToOlx}
                        type="button"
                        className="w-full bg-green-900 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 loginSubmit"
                     >
                        Login
                     </button>

                     <div className="flex mt-4">
                        <p className="mr-2">Don't have an account:</p>
                        <button onClick={() => navigate("/signup")} className="text-blue-500 hover:text-blue-700">
                           Create account
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
}

export default Login;
