import Footer from "./Footer"
import Header from "./Header"
import InfoCard from "./infocard"
import IntroCard from "./introcard"

function Portfolio(props) {
    return ( 

        <div class="flex flex-col min-h-screen min-w-screen overflow-hidden">
            <div class = "flex h-full w=full mt-10 p-4">
                <Header/>
            </div>
            <div class="flex flex-col h-full w-full">
                <section id="sec-1">
                    <div class="flex flex-col h-screen w-screen ">
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