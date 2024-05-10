import { Titulo } from "../../general/titulo";
import { Boton } from "../../general/boton";

export function Formulario() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen common-bg py-12 px-4">
        <Titulo titulo="CONTACT" sobre="Feel free to contact me by submitting the form below and I will get back to you as soon as possible" />
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full">
        <form className="mt-10">
          <div className="mb-8">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-3">Name</label>
            <input type="text" id="name" name="name" className="bg-gray-200 border border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg shadow-sm w-full p-5 text-lg" placeholder="Enter Your Name" />
          </div>
          <div className="mb-8">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-3">Email</label>
            <input type="email" id="email" name="email" className="bg-gray-200 border border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg shadow-sm w-full p-5 text-lg" placeholder="Enter Your Email" />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 block mb-3">Message</label>
            <textarea id="message" name="message" rows="8" className="bg-gray-200 border border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg shadow-sm w-full p-5 text-lg" placeholder="Enter Your Message"></textarea>
            </div>
            <div className="flex justify-end">
            <Boton nombre="SUBMIT" />
            </div>
            </form>
            </div>
            </div>
);
}