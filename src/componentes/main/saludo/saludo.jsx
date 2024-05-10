import { Boton } from "../../general/boton"


export function Saludo({nombre,descripcion}){
    return(
        <div className="text-center">
            <h1 className="text-6xl font-bold text-black">{nombre}</h1>
            <p className="mt-4  text-xl text-black">{descripcion}</p>
                <Boton nombre={'PROJECTS'}/>
                
            
        </div>
    )
}