import bxs from "../../assets/bxs.jpeg"
import ballgame from "../../assets/bgame.png"
import portfolio from "../../assets/port.png"

function Projects(props) {
    return ( 
        <div class="flex flex-col h-full w-11/12 m-auto overflow-y-scroll">
            <div class="flex h-3/6 w-full shrink-0">
                <div class="flex border-4 flex-row project-card h-5/6 w-9/12 m-auto">
                    <div class="flex h-full w-8/12">
                        <div class="flex h-5/6 w-11/12 m-auto rounded-xl">
                            <img class="hover:scale-125 duration-500 h-full w-full rounded-lg" src={bxs}/>
                        </div>
                    </div>
                    <div class="flex flex-col h-full w-full">
                        
                        <div class="flex flex-col h-full w-full">
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-title text-5xl p-5 mt-5">BUYxSELL</h1>
                            </div>
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-text p-5 text-2xl">A simple e-commerce website group project made with React and TailwindCSS.</h1>
                            </div>
                        </div>
                        <div class="flex flex-row h-3/6 w-full">
                            <div class="flex h-full w-full">
                                <button onClick={()=>{
                                        
                                }} class="project-button rounded-xl px-8 m-auto">Go to site</button>
                            </div>
                            <div class="flex h-full w-full">
                                <button onClick={()=>{
                                        
                                }} class="project-button rounded-xl px-8 m-auto">Go to code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex h-3/6 w-full shrink-0 ">
                <div class="flex flex-row border-4 project-card h-5/6 w-9/12 m-auto">
                    <div class="flex h-full w-8/12">
                        <div class="flex h-5/6 w-11/12 m-auto rounded-xl">
                            <img class="hover:scale-125 duration-500 h-full w-full rounded-lg" src={portfolio}/>
                        </div>
                    </div>
                    <div class="flex flex-col h-full w-full">  
                        <div class="flex flex-col h-full w-full">
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-title text-5xl p-5 mt-5">Portfolio Website</h1>
                            </div>
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-text p-5 text-2xl">A personal portfolio website for myself to showcase skills, projects,e.t.c.</h1>
                            </div>
                        </div>
                        <div class="flex flex-row h-3/6 w-full">
                            <div class="flex h-full w-full">
                                <button onClick={()=>{
                                        
                                }} class="project-button rounded-xl px-8 m-auto">Go to code</button>
                            </div>
                        </div>
                    </div>
                </div>                      
            </div>
            <div class="flex h-3/6 w-full shrink-0">
                <div class="flex border-4 flex-row project-card h-5/6 w-9/12 m-auto">
                    <div class="flex h-full w-8/12">
                        <div class="flex h-5/6 w-11/12 m-auto rounded-xl">
                            <img class="hover:scale-125 duration-500 h-full w-full rounded-lg" src={ballgame}/>
                        </div>
                    </div>
                    <div class="flex flex-col h-full w-full">
                        
                        <div class="flex flex-col h-full w-full">
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-title text-5xl p-5 mt-5">Ball Game</h1>
                            </div>
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-text p-5 text-2xl">A ball bounce game mechanic created with simple HTML,CSS and JS.</h1>
                            </div>
                        </div>
                        <div class="flex flex-row h-3/6 w-full">
                            <div class="flex h-full w-full">
                                <button onClick={()=>{
                                        
                                }} class="project-button rounded-xl px-8 m-auto">Go to site</button>
                            </div>
                            <div class="flex h-full w-full">
                                <button onClick={()=>{
                                        
                                }} class="project-button rounded-xl px-8 m-auto">Go to code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Projects;