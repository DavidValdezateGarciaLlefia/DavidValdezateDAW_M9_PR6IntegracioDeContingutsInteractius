import { BotonGeneral } from "../../general/botonGen";


export function Conoceme({titulo, parrafo1, parrafo2, parrafo3, boton}) {
  return (
<div className="mt-24 lg:mt-0 w-4/5 lg:w-[37%] mx-auto mb-4 md:mb-0 text-left lg:text-left">
        <h3 className="text-3xl font-semibold mb-4">{titulo}</h3>
      <p className="mb-8 text-[17px] text-gray-500 leading-loose" dangerouslySetInnerHTML={{ __html: parrafo1 }}></p>
      <p className="mb-8 text-[17px] text-gray-500 leading-loose" dangerouslySetInnerHTML={{ __html: parrafo2 }}></p>
      <p className="mb-8 text-[17px] text-gray-500 leading-loose" dangerouslySetInnerHTML={{ __html: parrafo3 }}></p>
      <BotonGeneral nombre={boton}/>
    </div>
  );
}