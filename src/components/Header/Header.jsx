import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBasketShopping } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?q=${query}`); // Omdirigerar till sökresultatsidan med query i URL
    }
  };
    return (
      <header className="grid gap-2 grid-cols-1 sm:flex items-center sm:items-center sm:justify-between p-4 bg-gray-800 text-white">

      <div className="col-span-2 sm:col-span-3 flex sm:justify-start w-auto">
        <a href="http://localhost:3000/" className="w-full">
        <img src="https://placehold.co/200x100" alt="Bokiverse Logo" className='w-full sm:max-w-xs' />
        </a>
      </div>

        <div className="flex items-center justify-between sm:justify-start w-full sm:w-2/4">
          <form onSubmit={handleSearch} className="w-full">
            <input
              className="w-full p-2 rounded bg-gray-700 text-white"
              type="search"
              placeholder="Sök här"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Uppdatera sökterm
            />
          </form>
        </div>

        <div className="flex justify-center sm:justify-end space-x-4">
          <div><a href="http://"></a><FontAwesomeIcon icon={faHeart} className="text-2xl" /></div>
          <div><a href="http://"></a><FontAwesomeIcon icon={faBasketShopping} className="text-2xl" /></div>  
        </div>
  </header>
    );

}

export default Header;