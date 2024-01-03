import React, { useContext, useState } from 'react'
import './Login.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../store/AuthContext';

function Login() {

    const { isLoggedIn,user,setUser} = useContext(AuthContext)

    const navigate = useNavigate()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()

    const handleLoginToOlx = async (e) => {

        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, Email, Password);
            setUser(true)
            navigate('/')
        } catch (err) {
            alert(err.message)
            console.log(err);
        }

    }

    return (
        <>

            <div className="max-w-md mx-auto mt-8 p-6 rounded-md shadow-md loginMain">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-semibold mb-6 ">Login to Your Account</h2>
                    <i onClick={() => navigate('/')} className="fa-regular fa-circle-xmark "></i>
                </div>

                <form >
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
                            onChange={(e) => { setEmail(e.target.value) }}
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
                            onChange={(e) => { setPassword(e.target.value) }}
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

                    <div className='flex'>
                        <p>Dont have an account   :</p>
                        <button onClick={() => navigate('/signup')} >Create account</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login