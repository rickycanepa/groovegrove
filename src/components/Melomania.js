import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./views/ApplicationViews";
import { Authorized } from "../auth/Authorized";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import "./Melomania.css"

export const Melomania = () => {
    return < Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="*" element={
            <Authorized>
                <ApplicationViews />
            </ Authorized>
        } />
    </Routes>
}