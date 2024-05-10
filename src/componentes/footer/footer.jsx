export function Footer({ titulo, parrafo }) {
    return (
      <footer className="bg-black text-white w-full pt-10 pb-10">
        <div className=" pt-12 mx-auto max-w-6xl"> 
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-col items-center md:items-start mb-8"> 
              <h1 className="text-2xl font-bold mb-6">{titulo}</h1> 
              <p className="w-full md:w-3/4 text-center md:text-left text-sm">{parrafo}</p>
            </div>
            <div className="flex flex-col items-center md:items-start mb-8"> 
              <span className="text-2xl font-bold mb-6">SOCIAL</span> 
              <div className="flex">
                <a href="#" className="mx-1"><img src="src/img/iconos/linkedin.svg" alt="LinkedIn" className="h-5 w-5 filter invert" /></a>
                <a href="#" className="mx-1"><img src="src/img/iconos/github.svg" alt="GitHub" className="h-5 w-5 filter invert" /></a>
                <a href="#" className="mx-1"><img src="src/img/iconos/twitter.svg" alt="Twitter" className="h-5 w-5 filter invert" /></a>
                <a href="#" className="mx-1"><img src="src/img/iconos/book-open-solid.svg" alt="Email" className="h-5 w-5 filter invert" /></a>
                <a href="#" className="mx-1"><img src="src/img/iconos/youtube.svg" alt="YouTube" className="h-5 w-5 filter invert" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs py-4 text-center border-t border-gray-600 max-w-6xl mx-auto"> {/* Espacio vertical aumentado y ancho controlado */}
          <p className="mt-10">© Copyright 2024. Made by {titulo}</p>
        </div>
      </footer>
    );
  }
  