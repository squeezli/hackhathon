import React from "react";
import { Routes, Route } from "react-router-dom";

import {Home} from "./pages/Home/Home.jsx" 

export const useRouter = () => {
    return (
        <Routes>
            <Route path='/' element={Home} />
        </Routes>
    )
}