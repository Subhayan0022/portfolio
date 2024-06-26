import bxs from "../../assets/bxs.webp"
import ballgame from "../../assets/bgame.webp"
import portfolio from "../../assets/port.webp"
import certgen from "../../assets/certgen.webp"
import dino from "../../assets/dino.webp"
import upi from "../../assets/upi.webp"

import { useEffect } from "react"

function Projects(props) {

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
              const square = entry.target
          
              if (entry.isIntersecting) {
                square.classList.add('project-card-animation');
                return;
              }
              square.classList.remove('project-card-animation');
            });
          });
    
          observer.observe(document.querySelectorAll('.project-card')[0]);
          observer.observe(document.querySelectorAll('.project-card')[1]);
          observer.observe(document.querySelectorAll('.project-card')[2]);
          observer.observe(document.querySelectorAll('.project-card')[3]);
          observer.observe(document.querySelectorAll('.project-card')[4]);

    })

    return ( 
        <div class="flex flex-col h-full w-full m-auto overflow-y-scroll">
            <div class="flex h-3/6 w-full shrink-0">
                <div class="flex flex-row project-card h-5/6 w-9/12 m-auto">
                    <div class="flex h-full w-10/12">
                        <div class="flex h-5/6 w-11/12 m-auto rounded-xl">
                            <img class="hover:scale-125 duration-500 h-full m-auto w-full rounded-lg" src={bxs}/>
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
                                <a class="m-auto" href="https://github.com/Subhayan0022/buyxsell-client" target="_blank" rel="noopener noreferrer">
                                    <button class="project-button rounded-xl px-8">Go to code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="flex h-3/6 w-full shrink-0 ">
                <div class="flex flex-row project-card h-5/6 w-9/12 m-auto">
                    <div class="flex h-full w-10/12">
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
                                <a class="m-auto" href="https://github.com/Subhayan0022/portfolio" target="_blank" rel="noopener noreferrer">
                                    <button class="project-button rounded-xl px-8">Go to code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>                      
            </div> */}
            <div class="flex h-3/6 w-full shrink-0">
                <div class="flex flex-row project-card h-5/6 w-9/12 m-auto">
                    <div class="flex h-full w-10/12">
                        <div class="flex h-5/6 w-11/12 m-auto rounded-xl">
                            <img class="hover:scale-125 duration-500 h-full w-full rounded-xl" src={ballgame}/>
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
            <div class="flex h-3/6 w-full shrink-0">
                <div class="flex flex-row project-card h-5/6 w-9/12 m-auto">
                    <div class="flex h-full w-10/12">
                        <div class="flex h-5/6 w-11/12 m-auto rounded-xl">
                            <img class="hover:scale-125 duration-500 h-full m-auto w-full rounded-lg" src={certgen}/>
                        </div>
                    </div>
                    <div class="flex flex-col h-full w-full">
                        
                        <div class="flex flex-col h-full w-full">
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-title text-5xl p-5 mt-5">Certificate Generator</h1>
                            </div>
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-text p-5 text-2xl">A webiste that provides a Certificate with credentials on an empty template</h1>
                            </div>
                        </div>
                        <div class="flex flex-row h-3/6 w-full">
                            <div class="flex h-full w-full">
                                <a class="m-auto" href="https://srmcshktr.com/certificate-generator/" target="_blank" rel="noopener noreferrer">
                                    <button class="project-button rounded-xl px-8 m-auto">Go to site</button>
                                </a>
                            </div>
                            <div class="flex h-full w-full">
                                <a class="m-auto" href="https://github.com/Subhayan0022/certificate-generator/" target="_blank" rel="noopener noreferrer">
                                    <button class="project-button rounded-xl px-8">Go to code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex h-3/6 w-full shrink-0">
                <div class="flex flex-row project-card h-5/6 w-9/12 m-auto">
                    <div class="flex h-full w-10/12">
                        <div class="flex h-5/6 w-11/12 m-auto rounded-xl">
                            <img class="hover:scale-125 duration-500 h-full m-auto w-full rounded-lg" src={upi}/>
                        </div>
                    </div>
                    <div class="flex flex-col h-full w-full">
                        
                        <div class="flex flex-col h-full w-full">
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-title text-5xl p-5 mt-5">Uniplacer Insight</h1>
                            </div>
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-text p-5 text-2xl">A Software Application used by University Placement Cell for visual insights and Representation of Student and Company Data.</h1>
                            </div>
                        </div>
                        <div class="flex flex-row h-3/6 w-full">
                            {/* <div class="flex h-full w-full">
                                <a class="m-auto" href="https://srmcshktr.com/certificate-generator/" target="_blank" rel="noopener noreferrer">
                                    <button class="project-button rounded-xl px-8 m-auto">Go to site</button>
                                </a>
                            </div> */}
                            <div class="flex h-full w-full">
                                <a class="m-auto" href="https://github.com/Subhayan0022/certificate-generator/" target="_blank" rel="noopener noreferrer">
                                    <button class="project-button rounded-xl px-8">Go to code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex h-3/6 w-full shrink-0">
                <div class="flex flex-row project-card h-5/6 w-9/12 m-auto">
                    <div class="flex h-full w-10/12">
                        <div class="flex h-5/6 w-11/12 m-auto rounded-xl">
                            <img class="hover:scale-125 duration-500 h-full m-auto w-full rounded-lg" src={dino}/>
                        </div>
                    </div>
                    <div class="flex flex-col h-full w-full">
                        
                        <div class="flex flex-col h-full w-full">
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-title text-5xl p-5 mt-5">Dino Game Clone in Python</h1>
                            </div>
                            <div class="flex h-4/6 w-full">
                                <h1 class="portfolio-text p-5 text-2xl">The famous Google Dino Game made in Python to learn basics of PyGame.</h1>
                            </div>
                        </div>
                        <div class="flex flex-row h-3/6 w-full">
                            {/* <div class="flex h-full w-full">
                                <a class="m-auto" href="https://srmcshktr.com/certificate-generator/" target="_blank" rel="noopener noreferrer">
                                    <button class="project-button rounded-xl px-8 m-auto">Go to site</button>
                                </a>
                            </div> */}
                            <div class="flex h-full w-full">
                                <a class="m-auto" href="https://github.com/Subhayan0022/certificate-generator/" target="_blank" rel="noopener noreferrer">
                                    <button class="project-button rounded-xl px-8">Go to code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default Projects;