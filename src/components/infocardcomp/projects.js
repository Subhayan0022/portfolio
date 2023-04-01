import bxs from "../../assets/bxs.jpeg"

function Projects(props) {
    return ( 
        <div class="flex flex-col h-full w-11/12 m-auto ">
            <div class="flex flex-row h-full w-full ">
                <div class="flex h-full w-full">
                    <div class="flex flex-col project-card h-5/6 w-10/12 m-auto ">
                        <div class="flex flex-row h-full w-full">
                            <div class="flex h-full w-full">
                                <div class="flex h-5/6 w-11/12 ml-8 rounded-xl m-auto ">
                                    <img class="h-full w-full rounded-xl" src={bxs}/>
                                </div>
                            </div>
                            <div class="flex flex-col h-full w-full ">
                                <div class="flex h-full w-full">
                                    <button onClick={()=>{
                                
                                    }} class="project-button rounded-xl px-8 m-auto">Go to site</button>
                                </div>
                                <div class="flex h-full w-full ">
                                    <button onClick={()=>{
                                
                                    }} class="project-button rounded-xl px-8 m-auto">Go to code</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex h-4/6 w-full  overflow-hidden">
                            <h2 class="portfolio-title text-4xl p-5 mt-2 text-center">BUYxSELL</h2>
                        </div>
                        <div class="flex h-4/6 w-full  overflow-hidden">
                            <h3 class="portfolio-text p-5 -mt-6 text-2xl">A simple e-commerce website made with react and tailwindCSS</h3>
                        </div>
                    </div>
                </div>
                <div class="flex h-full w-full">
                    <div class="flex flex-col project-card h-5/6 w-10/12 m-auto ">
                            <div class="flex flex-row h-full w-full">
                                <div class="flex h-full w-full">
                                    <div class="flex h-5/6 w-11/12 ml-8 rounded-xl m-auto ">
                                        <img class="h-full w-full rounded-xl" src={bxs}/>
                                    </div>
                                </div>
                                <div class="flex flex-col h-full w-full ">
                                    <div class="flex h-full w-full ">
                                        <button onClick={()=>{
                                    
                                        }} class="project-button rounded-xl px-8 m-auto">Go to code</button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex h-4/6 w-full  overflow-hidden">
                                <h2 class="portfolio-title text-4xl p-6 text-center">Portfolio</h2>
                                <h3 class="portfolio-text text-2xl mt-14">A personal portfolio made with tailwindCSS</h3>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="flex flex-row h-full w-full">
                <div class="flex h-full w-full">
                    <div class="flex flex-col project-card h-5/6 w-10/12 m-auto ">
                        <div class="flex flex-row h-full w-full">
                            <div class="flex h-full w-full">
                                <div class="flex h-5/6 w-11/12 ml-8 rounded-xl m-auto ">
                                    <img class="h-full w-full rounded-xl" src={bxs}/>
                                </div>
                            </div>
                            <div class="flex flex-col h-full w-full ">
                                <div class="flex h-full w-full">
                                    <button onClick={()=>{
                                    
                                    }} class="project-button rounded-xl px-8 m-auto">Go to site</button>
                                </div>
                                <div class="flex h-full w-full ">
                                    <button onClick={()=>{
                                    
                                    }} class="project-button rounded-xl px-8 m-auto">Go to code</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex h-4/6 w-full  overflow-hidden">
                            <h2 class="portfolio-title text-4xl p-6 text-center">COMING SOON!</h2>
                            <h3 class="portfolio-text text-xl mt-14"></h3>
                        </div>
                    </div>
                </div>
                <div class="flex h-full w-full">
                    <div class="flex flex-col project-card h-5/6 w-10/12 m-auto ">
                        <div class="flex flex-row h-full w-full">
                            <div class="flex h-full w-full">
                                <div class="flex h-5/6 w-11/12 ml-8 rounded-xl m-auto ">
                                    <img class="h-full w-full rounded-xl" src={bxs}/>
                                </div>
                            </div>
                            <div class="flex flex-col h-full w-full ">
                                <div class="flex h-full w-full">
                                    <button onClick={()=>{
                                    
                                    }} class="project-button rounded-xl px-8 m-auto">Go to site</button>
                                </div>
                                <div class="flex h-full w-full ">
                                    <button onClick={()=>{
                                    
                                    }} class="project-button rounded-xl px-8 m-auto">Go to code</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex h-4/6 w-full  overflow-hidden">
                            <h2 class="portfolio-title text-4xl p-6 text-center">COMING SOON!</h2>
                            <h3 class="portfolio-text text-xl mt-14"></h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Projects;