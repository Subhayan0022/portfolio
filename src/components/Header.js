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
                <a href="https://www.linkedin.com/in/subhayan-majumder-993487218/" target="_blank" rel="noopener noreferrer">
                <button onClick={()=>{
                   
                }}class="nav-items mr-10 h-10 w-10 hover:scale-90 duration-500 hover:cursor-pointer">
                <img title="LinkedIn" src={linkedin}/>
                </button>
                </a>

                <a href="https://github.com/Subhayan0022" target="_blank" rel="noopener noreferrer">
                <button onClick={()=>{
                   
                }}class="nav-items mr-10 h-10 w-10 hover:scale-90 duration-500 hover:cursor-pointer">
                <img title="Github" src={github}/>
                </button>
                </a>

                <img title="Contact Me" class="nav-items mr-10 h-10 w-10 hover:scale-90 duration-500 hover:cursor-pointer" src={contacts} onClick={()=>{
                    document.getElementById('subMenu').classList.toggle("open-menu");
                }} />

                <div class="sub-menu-wrap" id="subMenu" >
                    <div class="sub-menu">
                        <div class="user-info">
                            <h2>Gmail: msubhayan529@gmail.com</h2>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
     );
}

export default Header;