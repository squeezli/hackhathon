import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home.jsx";

import { RequireAuth } from "react-auth-kit";
import { Login } from "./pages/Login/Login.jsx"

export const useRouter = () => {
    return (
        <Routes>
            {/* secure */}
            <Route path="/profile" element={
                <RequireAuth loginPath="/sign">
                    <Home />
                </RequireAuth>
            } />

            <Route path="/task/form" element={
                <RequireAuth loginPath="/sign">
                    <Home />
                </RequireAuth>
            } />


            {/* secure */}

            <Route path='/sign' element={<Home/>} />
            <Route path='/' element={<Home/>} />
        </Routes>
    )
}