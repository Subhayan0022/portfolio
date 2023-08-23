import { useState } from "react";
import { useEffect } from "react"

import About from "./infocardcomp/about"
import Skills from "./infocardcomp/skills"
import Projects from "./infocardcomp/projects"
import Achievements from "./infocardcomp/achievements"

function InfoCard(props) {

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
              const square = entry.target
          
              if (entry.isIntersecting) {
                square.classList.add('portfolio-card-animation');
                return;
              }
              square.classList.remove('portfolio-card-animation');
            });
          });
    
          observer.observe(document.querySelectorAll('.portfolio-card')[1]);
    })

    // CHANGE THIS AFTER USE
    const [currentButton, updateCurrentButton] = useState("AboutCard")

    const infoCardButton = {}
    infoCardButton["AboutCard"] = <About/>
    infoCardButton["SkillsCard"] = <Skills/>
    infoCardButton["ProjectsCard"] = <Projects/>
    infoCardButton["AchievementsCard"] = <Achievements/>

    return ( 
        <div class="flex flex-col portfolio-card m-auto rounded-3xl  h-full w-11/12">
            <div class="flex flex-row justify-center m-auto shrink-0 h-40 w-full  rounded-xl">
                <div class="flex h-full w-full ">
                    <button onClick={()=>{
                        updateCurrentButton("SkillsCard")
                    }} class="info-button rounded-xl  m-auto">Skills</button>
                </div>
                <div class="flex h-full w-full ">
                    <button onClick={()=>{
                        updateCurrentButton("ProjectsCard")
                    }} class="info-button rounded-xl m-auto ">Projects</button>
                </div>
                <div class="flex h-full w-full ">
                    <button onClick={()=>{
                        updateCurrentButton("AchievementsCard")
                    }} class="info-button rounded-xl m-auto ">Certificates</button>
                </div>
            </div>
            <div class="flex h-full w-full overflow-y-scroll">
                {infoCardButton[currentButton]}
            </div>
        </div>
     );
}

export default InfoCard;