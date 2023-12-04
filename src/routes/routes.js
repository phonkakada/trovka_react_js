import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "../signup/signup_page";
import { addPost, gotoSignupPage1, gotoSignupPage2, home, login, post_by_model, profile, signup, undermaintenance, view_post, view_profile } from "./string_routes";
import Home from "../home/main";
import Login from "../login/login";
import PageUnderMaintenance from "../page_under_maintenance";
import AddPost from "../profile/posts/addPost";
import Profile from "../profile/profile";
import NavBar from "../components/NavBar";
import ViewPost from "../home/view_post";
import { Provider, useSelector } from "react-redux";
import {store} from '../app/store'
import ViewProfile from "../home/view_profile";
import PostByModel from "../home/view_post_by_model";

const RoutesManagement = () => {
    return (
        <>
            <Provider store={store}>
                
                <BrowserRouter>
                    <div className="z-[2] top-0 sticky w-full h-full"><NavBar /></div>
                    <Routes>
                        <Route path={signup} element={<SignUp />}></Route>
                        <Route path={home} element={<Home />}></Route>
                        <Route path={login} element={<Login />}></Route>
                        <Route path={undermaintenance} element={<PageUnderMaintenance />}></Route>
                        <Route path={addPost} element={<AddPost />}></Route>
                        <Route path={profile} element={<Profile />}></Route>
                        <Route path={view_post + ":id"} element={<ViewPost />}></Route>
                        <Route path={view_profile + ":uuid"} element={<ViewProfile />}></Route>
                        <Route path={post_by_model + ":model"} element={<PostByModel />}></Route>
                        <Route path="*" element={<Navigate to={'/'} />}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default RoutesManagement