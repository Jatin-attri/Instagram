import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Homepage(){
    return (
        <>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        
        
        </>
    )
}