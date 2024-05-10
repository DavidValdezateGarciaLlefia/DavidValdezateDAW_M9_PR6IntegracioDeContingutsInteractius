import { Avatar } from "./avatar"
import { ListaMenu } from "./menu"



export function Navbar(){
    return(
        <nav className="fixed top-0 z-50 w-full shadow-xl bg-white border-gray-200 px-2 sm:px-4 py-2.5 text-gray-900">
          <div className="flex justify-between items-center w-full max-w-full">
            <Avatar avatar={"src/assets/avatar.png"} nombre={"DAVID VALDEZATE"} />        

            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white mr-12">
                <ListaMenu palabraMenu={"HOME"} />
                <ListaMenu palabraMenu={"ABOUT"} />
                <ListaMenu palabraMenu={"PROJECTS"} />
                <ListaMenu palabraMenu={"CONTACT"} />
            </ul>
            </div>
          </div>
        </nav>
    )
}