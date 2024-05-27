import { Icono } from "./iconos";

export function ContainerSocial(){
    return(
        <div className="hidden lg:block shadow-2xl absolute left-0 transform -translate-y-1/2 bg-white p-4 space-y-3">            
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'https://raw.githubusercontent.com/DavidValdezateGarciaLlefia/DavidValdezateDAW_M9_PR6IntegracioDeContingutsInteractius/9e8efe03afe612676aa8aee3cf59ea4ad36e1357/src/assets/linkedin.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'https://raw.githubusercontent.com/DavidValdezateGarciaLlefia/DavidValdezateDAW_M9_PR6IntegracioDeContingutsInteractius/9e8efe03afe612676aa8aee3cf59ea4ad36e1357/src/assets/twitter.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'https://raw.githubusercontent.com/DavidValdezateGarciaLlefia/DavidValdezateDAW_M9_PR6IntegracioDeContingutsInteractius/9e8efe03afe612676aa8aee3cf59ea4ad36e1357/src/assets/youtube.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'https://raw.githubusercontent.com/DavidValdezateGarciaLlefia/DavidValdezateDAW_M9_PR6IntegracioDeContingutsInteractius/9e8efe03afe612676aa8aee3cf59ea4ad36e1357/src/assets/github.svg'}/>
            </div>
            <div className="hover:bg-purple-600 hover:bg-opacity-50 transition duration-300">
                <Icono icono={'https://raw.githubusercontent.com/DavidValdezateGarciaLlefia/DavidValdezateDAW_M9_PR6IntegracioDeContingutsInteractius/9e8efe03afe612676aa8aee3cf59ea4ad36e1357/src/assets/book-open-solid.svg'}/>
            </div>
        </div>
    )
}
