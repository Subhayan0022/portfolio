import Footer from "./Footer"
import Header from "./Header"
import InfoCard from "./infocard"
import IntroCard from "./introcard"

function Portfolio(props) {
    return ( 

        <div class="flex flex-col portfolio-bg min-h-screen w-screen overflow-auto">
            <Header/>
            <div class="flex flex-col h-full w-full">
                <section id="sec-1">
                    <div class="flex flex-col h-screen w-screen">
                        <IntroCard/>
                    </div> 
                </section>
                <section id="sec-2">
                    <div class="flex flex-col h-screen w-screen">
                        <InfoCard/>
                    </div> 
                </section>    
            </div>
            <Footer/>
        </div>

     )
}

export default Portfolio