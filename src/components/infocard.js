import { useState } from "react";

import About from "./infocardcomp/about"
import Skills from "./infocardcomp/skills"
import Projects from "./infocardcomp/projects"
import Achievements from "./infocardcomp/achievements"

function InfoCard(props) {

    const [currentButton, updateCurrentButton] = useState("AboutCard")

    const infoCardButton = {}
    infoCardButton["AboutCard"] = <About/>
    infoCardButton["SkillsCard"] = <Skills/>
    infoCardButton["ProjectsCard"] = <Projects/>
    infoCardButton["AchievementsCard"] = <Achievements/>

    return ( 
        <div class="flex flex-col portfolio-card m-10 rounded-xl h-6/6 w-full">
            <div class="flex justify-center h-1/6 w-full">
                <button onClick={()=>{
                    updateCurrentButton("AboutCard")
                }} class="info-button rounded-xl px-8 m-auto">About</button>
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
            <div class="flex h-full w-full border-2">
                {infoCardButton[currentButton]}
            </div>
        </div>
     );
}

export default InfoCard;