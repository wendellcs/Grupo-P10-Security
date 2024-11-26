import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/contact";
import About from "../pages/about";
import Services from "../pages/services";

import NotFound from "../pages/NotFound";

export default function RoutesApp(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>

            {/* Not Found Page */}
            <Route path="/*" element={<NotFound/>}/>
            {/* Private */}

        </Routes>
  
    )
}