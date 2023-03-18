import pfp from "../assets/face.jpg"

function IntroCard(props) {
    return ( 
        <div class="flex flex-col portfolio-card m-10 rounded-xl h-4/6 w-1/2">
            <div class="flex flex-wrap mt-10 justify-center">
                <div class="w-6/12 sm:w-4/12 px-4">
                    <img src={pfp} alt="..." class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                </div>
            </div>
            <div class="flex flex-col overflow-hidden h-full w-full mt-10">
                <h1 class="portfolio-title ml-14 text-6xl">Hi! I'm Subhayan</h1>
                <h2 class="portfolio-text text-center p-3 mt-10">I'm a Student Developer currently pursuing my undergrad degree in Bachelor of Computer Applications (BCA).</h2>
                <h3 class="portfolio-text text-center p-3">I love working on my Game Development projects and Web Designing</h3>
                <button onClick={()=>{
				    }}>
					<h1 class="m-auto mt-10 text-white hover:text-gray-400 italic underline">Learn more...</h1>
				</button>
            </div>
        </div>
     );
}

export default IntroCard;