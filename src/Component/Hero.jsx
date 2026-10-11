import './Hero.css'
import heroImg from "../assets/hero1.png"
import { Link, useNavigate } from 'react-router-dom';

function Hero() {

    const navigate = useNavigate();

    return (
        <>
        <section className="hero" 
        style={{backgroundImage: `url(${heroImg})`}}
        >


            <div className="hero-overlay">
                <div className="hero-content">
                    <p className="hero-tagline">
                        EXPLORE · TREK · ENJOY
                    </p>
                    <h1>Find Your Next <span className='adventure-text'>
                        Adventure</span></h1>

                    <p className="hero-description">
                        Explore forts, trails and hidden gems of Sahyardis.
                    </p>

                    <button className="hero-btn"
                    onClick={() => navigate('./explore')}
                    >
                        Explore Treks
                    </button>
                </div>
            </div>
        </section>



        
        </>
    )
}

export default Hero;