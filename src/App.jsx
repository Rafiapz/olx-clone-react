import { createContext } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import PostContextComponent from './store/PostContext'
import AuthContextComponent from './store/AuthContext';



export const authenticationContext = createContext()

function App() {


  return (

    <AuthContextComponent>
      <PostContextComponent>
        <div className='container' >
          <Outlet />
        </div>
      </PostContextComponent>
    </AuthContextComponent>


  )
}

export default App
