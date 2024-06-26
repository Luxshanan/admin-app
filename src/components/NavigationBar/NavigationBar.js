import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";
import { Link } from 'react-router-dom';

function NavigationBar() {
    const { state, signIn, signOut } = useAuthContext();
    return (
        <nav className="navbar navbar-dark bg-info navbar-expand-lg">
            <a className="navbar-brand" href="#">ADMIN CONSOLE</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                    </li>


                </ul>


                {state.isAuthenticated ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="navbar-text" >
                                Welcome {state.username}
                            </div>

                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link" onClick={() => signOut()}>
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link onClick={() => signIn()} className="nav-link">
                                Login
                            </Link>
                        </li>
                    </div>
                )}



            </div>
        </nav>



    );
}


export default NavigationBar;