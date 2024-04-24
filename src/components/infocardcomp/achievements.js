import cert1 from "../../assets/achiv1.webp"
import cert2 from "../../assets/achiv2.webp"

function Achievements(props) {
    return ( 
        <div class="flex flex-col h-full w-full m-auto overflow-y-scroll">
            <div class="flex h-full w-full shrink-0">
                <div class="flex achiv-card h-5/6 w-9/12 m-auto">
                    <div class="flex flex-col m-auto h-full w-full">
                        <div class="flex h-1/6 w-8/12 m-auto">
                            <h1 class="portfolio-title text-3xl m-auto">MongoDB Basics Completion.</h1>
                        </div>
                        <div class="flex h-4/6 w-8/12 m-auto rounded-xl">
                            <img class="hover:scale-125 duration-500 h-full w-full rounded-lg" src={cert1}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex h-full w-full shrink-0">
                <div class="flex achiv-card h-5/6 w-9/12 m-auto">
                    <div class="flex flex-col m-auto h-full w-full">
                        <div class="flex h-1/6 w-8/12 m-auto ">
                            <h1 class="portfolio-title text-3xl m-auto">GameDev: Mathematics Course Comepleted.</h1>
                        </div>
                        <div class="flex h-4/6 w-8/12 m-auto rounded-xl">
                            <img class="hover:scale-125 duration-500 h-full w-full rounded-lg" src={cert2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Achievements;