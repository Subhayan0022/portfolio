import cpp from "../../assets/cpp.webp"
import c from "../../assets/c.webp"
import java from "../../assets/java.webp"
import csharp from "../../assets/csharp.webp"
import python from "../../assets/python.webp"
import html from "../../assets/html.webp"
import css from "../../assets/css.webp"
import jscript from "../../assets/jscript.webp"
import react from "../../assets/react.webp"
import node from "../../assets/node.webp"
import mongo from "../../assets/mongo.webp"
import sql from "../../assets/sql.webp"
import unreal from "../../assets/unreal.webp"
import unity from "../../assets/unity.webp"
import php from "../../assets/phpicon.webp"
import xampp from "../../assets/xampp.webp"
import blender from "../../assets/blender.webp"
import dbms from "../../assets/dbms.webp"

function Skills(props) {
    return (
        <div class="flex flex-col h-full w-11/12 m-auto ">
            <div class="flex flex-row h-full w-full">
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-5/6 w-10/12 m-auto shrink-0 -mt-1" src={cpp}/>
                    <p class="text-white font-bold">C++</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-7/12 m-auto" src={c}/>
                    <p class="text-white font-bold mt-4">C</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-6/12 m-auto" src={java}/>
                    <p class="text-white font-bold mt-4">Java</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-7/12 m-auto" src={csharp}/>
                    <p class="text-white font-bold mt-4">C Sharp</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-6/12 m-auto" src={python}/>
                    <p class="text-white font-bold mt-4">Python</p>
                </div>
                
            </div>
            <div class="flex flex-row h-full w-full">
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-5/12 m-auto mt-1" src={html}/>
                    <p class="text-white font-bold mt-3">HTML</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-6/12 m-auto" src={css}/>
                    <p class="text-white font-bold mt-4">CSS</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-6/12 m-auto" src={jscript}/>
                    <p class="text-white font-bold mt-4">JavaScript</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-6/12 m-auto" src={react}/>
                    <p class="text-white font-bold mt-4">React</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-3/6 w-7/12 m-auto mt-4" src={php}/>
                    <p class="text-white font-bold mt-5">PHP</p>
                </div>
                
            </div>
            <div class="flex flex-row h-full w-full">
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-3/6 w-4/12 m-auto mt-4" src={node}/>
                    <p class="text-white font-bold mt-4">NodeJS</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-6/12 m-auto" src={mongo}/>
                    <p class="text-white font-bold mt-2">MongoDB</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-6/12 m-auto" src={sql}/>
                    <p class="text-white font-bold mt-4">SQL</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-6/12 m-auto" src={dbms}/>
                    <p class="text-white font-bold mt-4">DBMS</p>
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-6/12 m-auto" src={xampp}/>
                    <p class="text-white font-bold mt-4">Apache</p>
                </div>
            </div>
            <div class="flex flex-row h-full w-full">
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-6/12 m-auto mt-5" src={unreal}/>
                    {/* <p class="text-white font-bold mt-4">Unreal Engine</p> */}
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-11/12 m-auto mt-5" src={unity}/>
                    {/* <p class="text-white font-bold mt-4">C++</p> */}
                </div>
                <div class="skill-card h-4/6 w-1/12 m-auto">
                    <img class="h-4/6 w-6/12 m-auto" src={blender}/>
                    <p class="text-white font-bold mt-4">Blender</p>
                </div>
            </div>
        </div>
    );
        
}

export default Skills;