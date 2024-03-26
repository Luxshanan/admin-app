import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from '../NavigationBar/NavigationBar';
import DefaultHome from '../DefaultHome/DefaultHome';


function Layout() {

    return (
        <>
            <BrowserRouter>
                <NavigationBar />
                <br /><br />
                <Routes>
                    <Route path='/' element={ <DefaultHome />} />
                    
                </Routes>
            </BrowserRouter>
        </>
    );

}

export default Layout;