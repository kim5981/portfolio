import React, { useState } from "react";
import "../styles/Project.css"
import project1 from "../project photos/friendly-login.png"
import project1b from "../project photos/friendly-welcome.png"


export default function Project (){

    const [ img, setImg ] = useState(project1)
    const [ alt, setAlt ] = useState("a project by Kim Rodriguez")

    function changeImage(){
        if(img === project1){
            setImg(project1b)
        } else{
            setImg(project1)
        }
    }
    return(
        <div className="project">
            <div className="slides">
                <img className="slide-item" alt={ alt } src={ img }/>
            </div>

            <div id="dots">
                <span className="dot" onClick={ changeImage }></span>
                <span className="dot" onClick={ changeImage }></span>
            </div>
                        
        </div>
    )
}