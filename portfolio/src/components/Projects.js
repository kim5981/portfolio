import React from "react"
import "../styles/Projects.css"

export default function Projects(){
    return (
        <>
            <section className="project-wrap">
                <h2>Projects</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="projects">
                    <img className="project" alt="placeholder" src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg"/>
                    <img className="project" alt="placeholder" src="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg"/>
                    <img className="project" alt="placeholder" src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <img className="project" alt="placeholder" src="https://images.pexels.com/photos/6212801/pexels-photo-6212801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>
            </section>
        </>
    )
}