import { Titulo } from "../../general/titulo";
import { Proyecto } from "./proyectos";

export function ContainerProyectos() {
    return (
        <div className="container mx-auto px-4 md:px-12 xl:px-20 max-w-7xl">
        <Titulo titulo={'PROYECTOS'} sobre={'Aqui podréis ver unos proyectos que he hecho yo y sus casos de estudio'}/>
        <div className="space-y-30">
          <Proyecto imagen={'src/img/proyectos/tetris.jpg'} titulo={'Tetris'} parrafo={'El conocido juego de Tetris fue creado en 1984 y ha sido llevado a muchas plataformas, y aquí hay otro más pero para página web.'} />
          <Proyecto imagen={'src/img/proyectos/tickets.jpg'} titulo={'Incidencias'} parrafo={'El proposito de este proyecto es recrear una página web para incidencias por roles para un colegio, y sus ordenadores.'} />
          <Proyecto imagen={'src/img/proyectos/vanilla.jpg'} titulo={'Vanilla'} parrafo={'VanillaGames es un proyecto creado para clase, el cual este tiene para ver proyectos creados por alumnos'}/>
        </div>
      </div>
    );
  }