import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import Contact from "../../pages/Contact";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Products from "../../pages/Products";

import NotFound from "../../pages/NotFound";

export default function RoutesApp(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/products" element={<Products/>}/>

            {/* Not Found Page */}
            <Route path="/*" element={<NotFound/>}/>
            {/* Private */}
        </Routes>
  
    )
}