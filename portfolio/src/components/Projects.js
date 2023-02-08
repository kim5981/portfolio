import React, { useState } from "react"
import "../styles/Projects.css"
import project1 from "../project photos/friendly-login.png"
import project1b from "../project photos/friendly-welcome.png"

export default function Projects(){

    const [ img, setImg ] = useState(project1)

    function changeImage(){
        if(img == project1){
            setImg(project1b)
        } else{
            setImg(project1)
        }
    }

    return (
        <>
            <section className="project-wrap">
                <h2>Projects</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="projects">

                    <div className="carousel project" aria-label="carousel">
                        <div className="slides fade" id="project-1a" aria-label="slide 1 of 2">
                            <img className="slide-item" alt="social media project: friendly" src={ img }/>
                        </div>

                        <div id="dots">
                            <span className="dot" onClick={ changeImage }></span>
                            <span className="dot" onClick={ changeImage }></span>
                        </div>
                        
                    </div>

                    
                    
                      
                                            
                    <img className="project" alt="placeholder" src="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg"/>
                    <img className="project" alt="placeholder" src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <img className="project" alt="placeholder" src="https://images.pexels.com/photos/6212801/pexels-photo-6212801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>
            </section>
        </>
    )
}