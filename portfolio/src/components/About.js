import React from "react";
import "../styles/About.css"
import logo from "../logo.svg"
import arrow from "../circle-down-solid.svg"


export default function About(){
    return (
        <>
        <section className="about-wrap">
            <div className="text">

                <h1>Hi! This is a greeting</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div> 
                    <button>Show more</button> 
                    <arrow icon="fa-solid fa-circle-down"/>
                </div>
            </div>
            
            <img className="selfie" alt="software engineer kimberly rodriguez" src={ logo }/>
        </section>
        </>
    )
}
