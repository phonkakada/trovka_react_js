import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../signup/signup_page";
import { addPost, gotoSignupPage1, gotoSignupPage2, home, login, signup, undermaintenance } from "./string_routes";
import Home from "../home/main";
import Login from "../login/login";
import PageUnderMaintenance from "../page_under_maintenance";
import AddPost from "../profile/posts/addPost";

const RoutesManagement = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={signup} element={<SignUp />}></Route>
                <Route path={home} element={<Home />}></Route>
                <Route path={login} element={<Login />}></Route>
                <Route path={undermaintenance} element={<PageUnderMaintenance />}></Route>
                <Route path={addPost} element={<AddPost />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesManagement