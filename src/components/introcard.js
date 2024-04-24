import pfp from "../assets/face.gif"
import arrow from "../assets/arrow.png"
import resumepdf from "../assets/Resume.pdf"

function IntroCard(props) {
    return ( 
        <div class="flex flex-col h-full w-full">
            <div class="flex flex-row h-4/6 w-full">
                <div class="flex ml-10 m-auto h-4/6 w-8/12">
                    <div class="h-full w-full m-auto">
                        <img id="code" src={pfp} alt="..." class="h-full w-full"/>
                    </div>
                </div>
                <div class="flex flex-col  portfolio-card m-auto h-4/6 w-full">
                    
                    <div class="flex typewriter flex-col h-full w-10/12 mt-10">
                        <h1 class="portfolio-title text-center text-7xl font-black">HI! I'M SUBHAYAN.</h1>
                        <h2 class="portfolio-text text-2xl p-2 mt-10 text-center ">I'm a Student Developer currently pursuing my undergrad degree in Bachelor of Computer Applications (BCA).</h2>
                        <h3 class="portfolio-text text-2xl p-2 text-center">I develop Games on Unreal Engine and also create web apps while actively learning about the newest technological buzz.</h3>
                        <a class="m-auto" href={resumepdf} download="Resume-PDF-document" target="_blank" rel="noreferrer">
                            <button class="project-button rounded-xl px-8 ">RESUME</button>
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex mt-2 m-auto h-1/6 w-1/6">   
                <button class=" m-auto h-4/6 w-4/12">
                    <a href="#sec-2" class="h-full w-full m-auto">
                        <img class="h-full w-full m-auto animate-bounce " src={arrow}/>
                    </a>
                </button>
            </div>    
        </div>                
     );
}

export default IntroCard;