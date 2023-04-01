import cpp from "../../assets/cpp.png"
import c from "../../assets/c.png"
import java from "../../assets/java.png"
import csharp from "../../assets/csharp.png"
import python from "../../assets/python.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import jscript from "../../assets/jscript.png"
import react from "../../assets/react.png"
import node from "../../assets/node.png"
import mongo from "../../assets/mongo.png"
import sql from "../../assets/sql.png"
import unreal from "../../assets/unreal.png"
import unity from "../../assets/unity.png"

function Skills(props) {
    return (
        <div class="flex flex-col h-full w-11/12 m-auto">
            <div class="flex flex-row h-full w-full">
                <div class="flex h-full w-full  ">
                    <img class="skill-card h-3/6 w-5/12 m-auto" src={cpp}/>
                </div>
                <div class="flex h-full w-full  ">
                    <img class="skill-card h-3/6 w-5/12 m-auto" src={c}/>
                </div>
                <div class="flex h-full w-full ">
                    <img class="skill-card h-3/6 w-5/12 m-auto" src={java}/>
                </div>
                <div class="flex h-full w-full  ">
                    <img class="skill-card h-3/6 w-5/12 m-auto" src={csharp}/>
                </div>
                <div class="flex h-full w-full ">
                    <img class="skill-card h-3/6 w-5/12 m-auto" src={python}/>
                </div>
            </div>
            <div class="flex flex-row h-full w-full">
                <div class="flex h-full w-full  ">
                    <img class="skill-card h-4/6 w-5/12 m-auto" src={html}/>
                </div>
                <div class="flex h-full w-full  ">
                    <img class="skill-card h-4/6 w-5/12 m-auto" src={css}/>
                </div>
                <div class="flex h-full w-full ">
                    <img class="skill-card h-4/6 w-5/12 m-auto" src={jscript}/>
                </div>
                <div class="flex h-full w-full  ">
                    <img class="skill-card h-4/6 w-5/12 m-auto" src={react}/>
                </div>
                
            </div>
            <div class="flex flex-row h-full w-full">
                <div class="flex h-full w-full  ">
                    <img class="skill-card h-4/6 w-5/12 m-auto" src={node}/>
                </div>
                <div class="flex h-full w-full  ">
                    <h1 class="skill-card portfolio-text text-4xl font-bold m-auto">ExpressJS</h1>
                </div>
                <div class="flex h-full w-full ">
                    <img class="skill-card h-full w-6/12 m-auto" src={mongo}/>
                </div>
                <div class="flex h-full w-full  ">
                    <img class="skill-card h-4/6 w-6/12 m-auto" src={sql}/>
                </div>
            </div>
            <div class="flex flex-row h-full w-full">
                <div class="flex h-full w-full  ">
                    <img class="skill-card h-3/6 w-2/12 m-auto" src={unreal}/>
                </div>
                <div class="flex h-full w-full  ">
                    <img class="skill-card h-4/6 w-4/12 m-auto" src={unity}/>
                </div>
            </div>
        </div>
    );
        
}

export default Skills;