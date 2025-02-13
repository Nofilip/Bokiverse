import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
      <header className="grid gap-2 grid-cols-1 sm:flex items-center sm:items-center sm:justify-between p-4 bg-gray-800 text-white">

      <div className="col-span-2 sm:col-span-3 flex sm:justify-start">
        <img src="https://placehold.co/200x100" alt="Logo" className='w-full sm:w-auto' />
      </div>

        <div className="flex items-center justify-between xs:justify-center sm:justify-start w-full sm:w-2/4">
          <input
            className="w-full p-2 rounded bg-gray-700 text-white"
            type="search"
            placeholder="Sök här"
          />
        </div>

        <div className="flex justify-center sm:justify-end space-x-4">
          <div><a href="http://"></a><FontAwesomeIcon icon={faHeart} className="text-2xl" /></div>
          <div><a href="http://"></a><FontAwesomeIcon icon={faBasketShopping} className="text-2xl" /></div>  
        </div>
  </header>
    );

}

export default Header;