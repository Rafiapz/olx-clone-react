import { createContext } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import PostContextComponent from "./store/PostContext";
import AuthContextComponent from "./store/AuthContext";
import { Toaster } from "react-hot-toast";

export const authenticationContext = createContext();

function App() {
   return (
      <AuthContextComponent>
         <PostContextComponent>
            <div className="container">
               <Toaster position="top-center" containerClassName="text-red-500" />
               <Outlet />
            </div>
         </PostContextComponent>
      </AuthContextComponent>
   );
}

export default App;
