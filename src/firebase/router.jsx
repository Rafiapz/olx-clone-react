import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import Signup from "../components/forms/Signup";
import CreatePost from "../components/CreatePost/CreatePost";
import Post from "../components/cards/Post";
import Header from "../components/header/Header";
import Home from "../pages/Home";
import Login from "../components/forms/Login";
import Product from "../pages/Product";


export const userRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sell" element={<CreatePost />} />
            <Route path="/view" element={<Product/>}  />
        </Route>
    )
)