import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, } from "@fortawesome/free-regular-svg-icons";
import Footer from "../Footer/Footer";

const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    fetch(`http://localhost:8000/api/search?q=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Inga produkter hittades.");
        }
        return response.json();
      })
      .then((data) => {
        setResults(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return (
    <>
      <Header />
      <NavBar />
      <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold my-4 text-center">Sökresultat för {query}</h2>

      {loading && <p className="text-center">Laddar...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {results.length > 0 ? (
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map(product => (
              <Link 
                to={`/product/${product.slug}`} 
                onClick={() => window.scrollTo(0, 0)} 
                key={product.id} 
                className="border p-4 bg-slate-100 rounded-lg block hover:shadow-lg transition"
              >       
                <div className="relative">
                  <img className="w-full rounded-lg" src={product.image} alt={product.title} />
                  <FontAwesomeIcon icon={faHeart} className="text-2xl absolute bottom-2 right-2 cursor-pointer" />
                </div>
                <div className="p-4">
                  <h1 className="text-xl font-bold mt-2">{product.title}</h1>
                  <p className="text-gray-400 text-sm mt-2">{product.author}</p>
                  <p className="text-sm mt-4 hidden">{product.description}</p>
                  <p className="text-lg font-semibold mt-6">{product.price} SEK</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <p className="text-center">Inga resultat hittades.</p>
      )}
    </div>
     <Footer />
    </>
  );
};

export default SearchResult;
