import { Conoceme } from "./conoceme"
import { About } from "./about"

import { ContainerHabilidades } from "./containerHabilidades"
import { Titulo } from "../../general/titulo"

export function ContainerSobre(){
    return(
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">    
      <Titulo titulo="SOBRE MÍ" sobre="Aquí encontrarás información sobre mí, lo que hago, y mis habilidades actuales, sobre todo en términos de programación y tecnología" />
      <div className="flex flex-col lg:flex-row lg:items-start justify-between items-center w-full">      
      <Conoceme
        titulo="¡Conóceme!"
        parrafo1="Soy un <strong>Programador FullStack concentrado en desarrollo de aplicaciones Web</strong> creando y manejando el front-end y back-end de aplicaciones Web que lleva al éxito del producto en general."
        parrafo2="En el poco tiempo que llevo, he conseguido muchas habilidades para el <strong>desarrollo</strong>, y me gustaría compartir mis habilidades con esta página para mostrar mis proyectos recientes."
        parrafo3="Estoy abierto a oportunidades de <strong>trabajo</strong> donde pueda ayudar, aprender y crecer. Si tienes una buena oportunidad que coincide con mi perfil y habilidades, no dudes en contactarme."
        boton="CONTACTO"
      />
      
      <ContainerHabilidades titulo="Mis habilidades"/>
      
      
     
    </div>
  </div>
  </div>
    )
    
}