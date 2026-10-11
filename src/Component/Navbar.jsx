import "./Navbar.css"
import {NavLink,Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
    return(
        <>
        <nav className="navbar">
            <div className="navbar-logo" 
            onClick={()=> navigate('/')}>
            TREKMATE
            </div>

            <ul className="navbar-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/explore">Explore</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>


        </nav>
        
        </>
    )
}

export default Navbar;