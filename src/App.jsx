import { Navbar } from './componentes/header/navbar'

import './App.css'
import { ContainerSaludo } from './componentes/main/saludo/containerSaludo'
import { ContainerSobre } from './componentes/main/sobre/containerSobre'
import { ContainerProyectos } from './componentes/main/proyectos/containerProyectos'
import { Formulario } from './componentes/main/formulario/formulario'
import { Footer } from './componentes/footer/footer'




function App() {


  return (
    <div>
      <div>
      <Navbar />
      </div>
    <div><ContainerSaludo /></div>
    <div><ContainerSobre /></div>
    <div className='mt-20'><ContainerProyectos /></div>
    <div><Formulario></Formulario></div> 
    <div>
      <Footer 
    titulo="David Valdezate" 
    parrafo="Programador full-stack que hace aplicaciones web que suelen llevar al éxito del producto final en general." 
  />
    </div>
  </div>
  )
}

export default App
