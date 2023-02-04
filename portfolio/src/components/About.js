import React from "react";
import "../styles/About.css"
import logo from "../logo.svg"



export default function About(){
    return (
        <>
        <section className="about-wrap">
            <div className="text">

                <h1>Hi! This is a greeting</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="more-btn"> 
                    <button>More info</button> 
                    <p>&#8595;</p>
                </div>
            </div>
            
            <img className="selfie" alt="software engineer kimberly rodriguez" src={ logo }/>
        </section>
        </>
    )
}
