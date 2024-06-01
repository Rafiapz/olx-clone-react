import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import CreatePost from "../components/CreatePost/CreatePost";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../components/Forms/Login";
import Signup from "../components/Forms/Signup";

export const userRouter = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<App />}>
         <Route index element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/sell" element={<CreatePost />} />
         <Route path="/view" element={<Product />} />
      </Route>
   )
);
