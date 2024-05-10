import { ContainerSocial } from "./containerSocial"
import { Saludo } from "./saludo"


export function ContainerSaludo() {
    return (
      <div className="min-h-screen flex flex-col lg:flex-row justify-center lg:justify-start items-center common-bg">
        <div className="w-full max-w-4xl mx-auto px-4 lg:px-0">
          <ContainerSocial />
          <div className=" lg:-mt-28 lg:ml-12">
            <Saludo 
              nombre="Hola, soy David Valdezate" 
              descripcion="Soy un programador web entusiasta, recientemente graduado del curso de Desarrollo de Aplicaciones Web 2 (DAW2), con habilidades sólidas en HTML, CSS, JavaScript y frameworks modernos como React.js." 
            />
          </div>
        </div>
      </div>
    );
  }