import React, { useState } from "react";
import project1 from "../project photos/friendly-login.png"
import project1b from "../project photos/friendly-welcome.png"


export default function Project (){

    const [ img, setImg ] = useState(project1)

    function changeImage(){
        if(img === project1){
            setImg(project1b)
        } else{
            setImg(project1)
        }
    }
    return(
        <div className="carousel project" aria-label="carousel">
                        <div className="slides fade" id="project-1" aria-label="slide 1 of 2">
                            <img className="slide-item" alt="social media project: friendly" src={ img }/>
                        </div>

                        <div id="dots">
                            <span className="dot" onClick={ changeImage }></span>
                            <span className="dot" onClick={ changeImage }></span>
                        </div>
                        
                    </div>
    )
}