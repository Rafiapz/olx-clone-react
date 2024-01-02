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
import AuthContextComponent from './hooks/AuthContext';



 export const authenticationContext=createContext()

function App() {






  return (

    <AuthContextComponent>
      <PostContextComponent>    
    <div className='container' >
      <Outlet/>
    </div>
    </PostContextComponent>
    </AuthContextComponent>
  
    
  )
}

export default App
