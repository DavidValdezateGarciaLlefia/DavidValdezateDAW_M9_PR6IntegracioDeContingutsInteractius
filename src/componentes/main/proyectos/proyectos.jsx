import { BotonGeneral } from "../../general/botonGen"


export function Proyecto({ imagen, titulo, parrafo }) {
    return (
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-20">
        <img className="w-full lg:max-w-[715px] shadow-xl" src={imagen} alt="Project Thumbnail" />
        <div className="mt-4 lg:mt-0 lg:w-3/5">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">{titulo}</h3>
          <p className="text-base text-gray-600 mb-6">{parrafo}</p>
          <BotonGeneral nombre={'CASO DE ESTUDIO'} />
        </div>
      </div>
    );
  }