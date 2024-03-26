import { useAuthContext } from "@asgardeo/auth-react";
import SalesReport from "../SalesReport/SalesReport";

function DefaultHome() {
    const { state } = useAuthContext();
    return (
        <>
            {state.isAuthenticated ? <SalesReport /> : 
            <div className="container">
                <img 
                    src="https://cdn.pixabay.com/photo/2013/07/13/01/22/vegetables-155616_960_720.png"

                />
            </div>}

        </>
    );

}

export default DefaultHome;