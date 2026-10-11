import "./Navbar.css"
import { useNavigate } from "react-router-dom";

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
                <li><a href="/">Home</a></li>
                <li><a href="/explore">Explore</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>


        </nav>
        
        </>
    )
}

export default Navbar;