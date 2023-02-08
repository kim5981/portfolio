import React from "react"
import "../styles/Projects.css"

import Project from "./Project"

export default function Projects(){

    

    return (
        <>
            <section className="project-wrap">
                <h2>Projects</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <Project/>
                
                
            </section>
        </>
    )
}