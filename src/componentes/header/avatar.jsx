export function Avatar({avatar, nombre}) {
    return (
        <a href="https://flowbite.com/" className="flex items-center space-x-3 ml-8 rtl:space-x-reverse"><img src={avatar} className="w-[50px]" alt="Avatar" />
        <span className="self-center text-xl font-semibold whitespace-nowrap ">{nombre}</span></a>
            
       
    );
}