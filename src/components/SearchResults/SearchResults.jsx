import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; // Hämtar söktermen från URL
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8000/api/products?q=${query}`);
        if (!response.ok) {
          throw new Error("Det gick inte att hämta produkterna.");
        }
        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]); // Körs varje gång query ändras

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sökresultat för: "{query}"</h1>

      {loading && <p>Laddar...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {results.length === 0 && !loading && !error && <p>Inga produkter hittades.</p>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((product) => (
          <li key={product.id} className="border p-4 rounded bg-gray-100">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p>{product.description}</p>
            <p className="font-bold">{product.price} kr</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
