import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavigationBar from '../NavigationBar/NavigationBar';





class Layout extends Component {


    state = {
       
    }

    componentDidMount() {
        
    }

    render() {
       
        return (
            <>
                <BrowserRouter>
                    <NavigationBar  />
                    <br /><br />

                    <Routes>

                    
                    </Routes>


                </BrowserRouter>

            </>

        );
    }
}

export default Layout;