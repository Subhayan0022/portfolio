import { useState } from "react";

import About from "./infocardcomp/about"
import Skills from "./infocardcomp/skills"
import Projects from "./infocardcomp/projects"
import Achievements from "./infocardcomp/achievements"

function InfoCard(props) {

    // CHANGE THIS AFTER USE
    const [currentButton, updateCurrentButton] = useState("AboutCard")

    const infoCardButton = {}
    infoCardButton["AboutCard"] = <About/>
    infoCardButton["SkillsCard"] = <Skills/>
    infoCardButton["ProjectsCard"] = <Projects/>
    infoCardButton["AchievementsCard"] = <Achievements/>

    return ( 
        <div class="flex flex-col portfolio-card m-auto rounded-3xl h-full w-11/12">
            <div class="flex justify-center m-auto shrink-0 h-40 w-full shadow-xl rounded-xl">
                <button onClick={()=>{
                    updateCurrentButton("SkillsCard")
                }} class="info-button rounded-xl px-8 m-auto">Skills</button>
                <button onClick={()=>{
                    updateCurrentButton("ProjectsCard")
                }} class="info-button rounded-xl px-8 m-auto">Projects</button>
                <button onClick={()=>{
                    updateCurrentButton("AchievementsCard")
                }} class="info-button rounded-xl px-8 m-auto">Achievements</button>
            </div>
            <div class="flex h-full w-full overflow-y-scroll">
                {infoCardButton[currentButton]}
            </div>
        </div>
     );
}

export default InfoCard;