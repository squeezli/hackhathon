import React from "react";
import { Routes, Route } from "react-router-dom"
import { RequireAuth } from "react-auth-kit";
import { Home } from "./pages/Home/Home.jsx"
import { Login } from "./pages/Login/Login.jsx"

export const useRouter = () => {
    return (
        <Routes>
            {/* secure */}
            <Route path="/profile" element={
                <RequireAuth loginPath="/login">
                    <Home />
                </RequireAuth>
            } />

            <Route path="/task/form" element={
                <RequireAuth loginPath="/login">
                    <Home />
                </RequireAuth>
            } />


            {/* secure */}

            <Route path='/login' element={<Login/>} />
            <Route path='/' element={<Home/>} />
        </Routes>
    )
}