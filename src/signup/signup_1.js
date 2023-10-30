import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../routes/string_routes";

const FirstPage = ({ setPage, setfirstName, setlastName , last_name , first_name }) => {
    document.addEventListener('keypress' , (e) => {
        if (e.key === "Enter"){
            setPage(2)
        }
    })
    return (
        <>
            <div class="bg-white w-full h-full flex items-center justify-center">
                <div class="w-full h-100">
                    <h1 class="text-xl md:text-2xl font-bold leading-tight">Create your account</h1>
                    <div>
                        <label class="block text-gray-700 pt-10">First name</label>
                        <input value={first_name} type="email" name="" placeholder="First name" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required onChange={(e) => setfirstName(e.target.value)}></input>
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700 pt-5">Last name</label>
                        <input value={last_name} type="text" name="" placeholder="Last name" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required onChange={(e) => setlastName(e.target.value)}></input>
                    </div>

                    <br></br>

                    <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6" onClick={(_) => {
                            setPage(2)
                        }} >Next</button>
                    <div className="flex justify-end mt-5 mr-5">
                        <p>Have Already Account ? </p>
                        <Link to={login}><p className="ml-2 font-semibold text-blue-600 hover:cursor-pointer">Login</p></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FirstPage