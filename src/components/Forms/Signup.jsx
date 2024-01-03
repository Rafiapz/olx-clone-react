import React, { useState, useContext } from "react";
import "./Signup.css";
import { FirebaseContext } from "../../store/firebaseContext";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Post from "../cards/Post";
import { AuthContext } from "../../hooks/AuthContext";
import { useForm } from 'react-hook-form';

function Signup() {
    const { isLoggedIn,handleSignup } = useContext(AuthContext);
    

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile_Number, setMobile_Number] = useState("");
    const [Password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleUser = (val) => {
       
    };

    const firestore = getFirestore();

    const signUpSubmission = async (event) => {
        event.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                Email,
                Password
            );
            await updateProfile(auth.currentUser, { displayName: Name });
            const data = {
                username: Name,
                email: Email,
                phone: Mobile_Number,
            };
            await setDoc(doc(firestore, "users", userCredential.user.uid), data);
            handleUser(userCredential.user.displayName);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="max-w-md mx-auto mt-8 p-6 rounded-md shadow-md signupContainer ">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold mb-6">Create an Account</h2>
                    <i
                        onClick={() => navigate("/")}
                        className="fa-regular fa-circle-xmark "
                    ></i>
                </div>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-600"
                        >
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
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600"
                        >
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
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-600"
                        >
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
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-600"
                        >
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
                </form>
            </div>
        </div>
    );
}

export default Signup;
