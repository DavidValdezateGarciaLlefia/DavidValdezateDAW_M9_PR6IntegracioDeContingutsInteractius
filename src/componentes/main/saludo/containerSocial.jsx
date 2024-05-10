import { Icono } from "./iconos";

export function ContainerSocial(){
    return(
        <div className="hidden lg:block shadow-2xl absolute left-0 transform -translate-y-1/2 bg-white p-4 space-y-3">            
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'src/assets/linkedin.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'src/assets/twitter.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'src/assets/youtube.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'src/assets/github.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'src/assets/book-open-solid.svg'}/>
            </div>
        </div>
    )
}