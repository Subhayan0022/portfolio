import pfp from "../assets/face.png"
import arrows from "../assets/arrow.png"

function IntroCard(props) {
    return ( 
        <div class="flex flex-col -mt-4 h-full w-full">
            <div class="flex flex-row h-4/6 w-full">
                <div class="flex mt-20 h-4/6 w-full">
                    <div class="w-4/12  mt-32  m-auto">
                        <img src={pfp} alt="..." class="h-full w-full animate-pulse" />
                    </div>
                </div>
                <div class="flex flex-col  portfolio-card m-auto mt-32 mr-32 rounded-xl h-4/6 w-full">
                    
                    <div class="flex flex-col overflow-auto h-full w-full mt-10">
                        <h1 class="portfolio-title text-center text-6xl">HI! I'M SUBHAYAN</h1>
                        <h2 class="portfolio-text text-2xl p-3 text-center mt-14">I'm a Student Developer currently pursuing my undergrad degree in Bachelor of Computer Applications (BCA).</h2>
                        <h3 class="portfolio-text text-2xl p-3 text-center">I love working on my Game Development projects, Web Designing and actively learning about new technological buzz..</h3>
                        <button onClick={()=>{
                        
                        }} class="project-button hover:scale-90 rounded-xl px-8 m-auto">RESUME</button>
                    </div>
                </div>
            </div>
            <div class="flex m-auto mt-2 h-1/6 w-1/6">
                <button onClick={()=>{
                   
                }} class="hover:cursor-pointer m-auto animate-bounce h-1/6 w-1/6">
                     <img src={arrows}/>
                </button>
            </div>    
        </div>                
     );
}

export default IntroCard;