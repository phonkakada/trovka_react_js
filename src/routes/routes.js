import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../signup/signup_page";
import { addPost, gotoSignupPage1, gotoSignupPage2, home, login, profile, signup, undermaintenance, view_post } from "./string_routes";
import Home from "../home/main";
import Login from "../login/login";
import PageUnderMaintenance from "../page_under_maintenance";
import AddPost from "../profile/posts/addPost";
import Profile from "../profile/profile";
import NavBar from "../components/NavBar";
import ViewPost from "../home/view_post";

const RoutesManagement = () => {
    return (
        <>
            <BrowserRouter>
                <div className="z-[1] top-0 sticky w-full h-full"><NavBar /></div>
                <Routes>
                    <Route path={signup} element={<SignUp />}></Route>
                    <Route path={home} element={<Home />}></Route>
                    <Route path={login} element={<Login />}></Route>
                    <Route path={undermaintenance} element={<PageUnderMaintenance />}></Route>
                    <Route path={addPost} element={<AddPost />}></Route>
                    <Route path={profile} element={<Profile />}></Route>
                    <Route path={view_post + ":id"} element={<ViewPost />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RoutesManagement