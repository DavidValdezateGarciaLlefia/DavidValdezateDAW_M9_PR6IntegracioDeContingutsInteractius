import { Icono } from "./iconos";

export function ContainerSocial(){
    return(
        <div className="hidden lg:block shadow-2xl absolute left-0 transform -translate-y-1/2 bg-white p-4 space-y-3">            
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'src/img/iconos/linkedin.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'src/img/iconos/twitter.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'src/img/iconos/youtube.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'src/img/iconos/github.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'src/img/iconos/book-open-solid.svg'}/>
            </div>
        </div>
    )
}