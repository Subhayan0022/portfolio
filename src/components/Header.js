import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import contacts from "../assets/contacts.png"

function Header(props) {
    return ( 
        <div class="flex flex-row  h-1/6 w-full">
            <div class="flex justify-start p-8 h-full w-full">
                <h1 class="portfolio-title mt-2 ml-10">SM.DEV</h1>
            </div>
            <div class="flex justify-end p-12 h-full w-full">
                <button onClick={()=>{
                   
                }}class="nav-items mr-10 h-10 w-10 hover:text-slate-300 hover:cursor-pointer">
                <img src={linkedin}/>
                </button>
                <img class="nav-items mr-10 h-10 w-10 hover:text-slate-300 hover:cursor-pointer" src={github}/>
                <img class="nav-items mr-10 h-10 w-10 hover:text-slate-300 hover:cursor-pointer" src={contacts}/>
            </div>
        </div>
     );
}

export default Header;