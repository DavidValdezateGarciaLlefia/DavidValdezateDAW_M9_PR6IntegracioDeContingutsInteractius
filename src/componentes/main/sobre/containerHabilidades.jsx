import { Habilidades } from "./habilidades"


export function ContainerHabilidades({titulo}){
    return(
<div className="w-4/5 lg:w-1/3 mx-auto mt-4 lg:mt-0">
            <h3 className="text-3xl font-semibold mb-4">{titulo}</h3>
        <div className="flex flex-wrap justify-center lg:justify-start">
            <Habilidades habilidad="HTML" />
            <Habilidades habilidad ="HTML"/>
            <Habilidades habilidad ="CSS"/>
            <Habilidades habilidad ="JavaScript"/>
            <Habilidades habilidad ="React"/>
            <Habilidades habilidad ="Wordpress"/>
            <Habilidades habilidad ="PHP"/>
            <Habilidades habilidad ="SASS"/>
            <Habilidades habilidad ="GIT"/>
            <Habilidades habilidad ="Github"/>
            <Habilidades habilidad ="Responsive Design"/>
            <Habilidades habilidad ="Terminal"/>
            <Habilidades habilidad ="Python"/>
            <Habilidades habilidad ="API"/>
            <Habilidades habilidad ="SQL"/>
            <Habilidades habilidad ="MySQL"/>
        </div>
    </div>
    )
    
    
    
}