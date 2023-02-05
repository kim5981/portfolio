import { React, useState, useEffect } from "react";

import "../styles/About.css"
import kim  from "../pic.png"




export default function About(){

    const [ textIdx, setTextIdx ] = useState("test")

    
    const list = [
            "web developer",
            "caffeine addict",
            "music lover",
            "hobby enthusiast"
        ]
    
    

    useEffect(() => {
        const interval = setInterval(() => {
        }, 1000)

        return () => clearInterval(interval)
    }, [])
    

    return (
        <>
        <section className="about-wrap">
            <div className="text">

                <h1>Hi I'm Kimberly,</h1>
                <div className="word" >{ textIdx }</div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="more-btn"> 
                    <button>more info</button> 
                    <p>&#8595;</p>
                </div>
            </div>
            
            <img className="selfie" alt="software engineer kimberly rodriguez" src={ kim }/>
        </section>
        </>
    )
}
