import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import contacts from "../assets/contacts.png"


function Header(props) {

    return ( 
        <div class="flex flex-row header h-2/6 w-full">
            <div class="flex h-full w-2/12">
                <h1 class="portfolio-title m-auto">SM.DEV</h1>
            </div>
            <div class="flex flex-row justify-end m-auto h-full w-full">
                <div class="flex h-full w-1/12 justify-center">
                    <a href="https://www.linkedin.com/in/subhayan-majumder-993487218/" target="_blank" rel="noopener noreferrer" >
                    <img class="nav-items h-10 w-10 hover:scale-90 duration-500 hover:cursor-pointer" id="links" title="LinkedIn" src={linkedin}/>
                    </a>
                </div>
                
                <div class="flex h-full w-0.5/12 justify-center ">
                    <a href="https://github.com/Subhayan0022" target="_blank" rel="noopener noreferrer" >
                    <img class="nav-items h-10 w-10 hover:scale-90 duration-500 hover:cursor-pointer" id="links" title="Github" src={github}/>
                    </a>
                </div>
                
                <div class="flex h-full w-1/12 justify-center ">
                    <img  id="links" title="Contact Me" class="nav-items h-10 w-10 hover:scale-90 duration-500 hover:cursor-pointer" src={contacts} onClick={()=>{
                        document.getElementById('subMenu').classList.toggle("open-menu");
                    }} />
                </div>

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