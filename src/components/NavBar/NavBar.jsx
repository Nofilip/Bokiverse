import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
      return (
        <nav className='grid justify-start sm:grid-cols-4 sm:gap-4 md:flex md:gap-8 bg-slate-600 text-white font-bold p-4 w-auto relative'>

        <button
        onClick={ () => setMenuOpen (!menuOpen)}
        className="sm:hidden" 
        >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-2xl"/>
        </button>

        <ul className={`absolute sm:static top-12 sm:w-auto bg-slate-700 sm:bg-transparent sm:flex flex-col sm:flex-row items-center

        ${ menuOpen ? "block" : "hidden"} z-50 shadow-lg w-full left-0`}>
          
          <li className='hover:underline p-2'><a href="http://">Nyheter</a></li>
          <li className='hover:underline p-2'><a href="http://">Böcker</a></li>
          <li className='hover:underline p-2'><a href="http://">Pussel</a></li>
          <li className='hover:underline p-2'><a href="http://">Ljudböcker</a></li>
          <li className='hover:underline p-2'><a href="http://">Rea</a></li>

        </ul>

      </nav>
      )

}

export default NavBar;