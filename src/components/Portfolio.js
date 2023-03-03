import Footer from "./Footer"
import Header from "./Header"
import InfoCard from "./infocard"
import IntroCard from "./introcard"

function Portfolio(props) {
    return ( 

        <div class="flex flex-col portfolio-bg min-h-screen max-w-screen">
            <Header/>
            <div class="flex flex-row h-screen w-full">
                <IntroCard/>
                <InfoCard/>
            </div>
            <Footer/>
        </div>

     )
}

export default Portfolio