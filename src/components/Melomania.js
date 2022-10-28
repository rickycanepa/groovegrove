import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./views/ApplicationViews";
import { Authorized } from "../auth/Authorized";
import { NavBar } from "./nav/NavBar";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import "./Melomania.css"

export const Melomania = () => {
    return < Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="*" element={
            <>
                <section className="header-container">
                <header id="header">MeloMania</header>
                <div id="subheader">Your album collection: digitized!</div>
                </section>
            
            <Authorized>
                <NavBar />
                <ApplicationViews />
            </ Authorized>
            </>
        } />
    </Routes>
}