import React from "react"
import "../styles/Header.css"

export default function Header(){
    return (
    
        <header>
            <div className="logo-wrap">
                <div className="row">
                    <div className="col center-text">
                    <h3 className="animate"> &#x3c;K/R&#x3e;</h3>
                    </div>
                </div>
            </div>
            
        <nav>
            <a id="home" href="#"> home </a>
            <a href="#"> projects </a>
            <a href="#"> contact </a>

        </nav>
        {/* vv add dark/light mode functionality later */}
        <button id="theme"> </button> 
        </header>
        
    )
}