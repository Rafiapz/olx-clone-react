import { createContext, useState } from 'react'
import './App.css'
import { collection, getDocs,updateDoc,doc,addDoc,deleteDoc} from 'firebase/firestore/lite';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Post from './components/cards/Post';

import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
import ProfileTooltip from './components/Profile_Tooltip/ProfileTooltip';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import CreatePost from './components/CreatePost/CreatePost';
import { Outlet } from 'react-router-dom';
import PostContextComponent from './hooks/PostContext'



 export const authenticationContext=createContext()

function App() {


  const [user, setUser] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [login, setLogin] = useState(false)
  const [signup,setSignup]=useState(false)

  const handleSignup=()=>{
    setSignup(!signup)
    setLogin(false)
  }

  
  const handleClick=()=>{
    setLogin(!login)
}



  return (

    <authenticationContext.Provider value={{signup,handleSignup,login,handleClick,user,setUser,isLoggedIn,setIsLoggedIn}} >
      <PostContextComponent>
    
    <div className='container' >
      {/* <Header props={{user,setUser,isLoggedIn,setIsLoggedIn,handleClick}} />
      
       <Login props={{login,handleClick,handleSignup}} />
        <Post/>
        <Post/>
        <Post/>
        <Signup props={{signup,handleSignup}} />
       

        <Product/>
        <Wishlist/>

        <CreatePost/>
        
      
      <Footer/> */}
      <Outlet/>
    </div>
    </PostContextComponent>
    </authenticationContext.Provider>
    
  )
}

export default App
