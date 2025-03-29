import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function AdminPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fel vid hämtning av produkter.");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); 

    return (
      <div className="min-h-screen">
      
      <h1 className="text-xl font-bold bg-zinc-950 text-white p-6">
        Administration
      </h1>

      <div className="grid grid-cols-5 gap-4 min-h-screen">
        
        <div className="bg-gray-200 p-4 col-span-1">
          <h2 className="text-lg font-semibold">Produkter</h2>
        </div>
        
        <div className="col-span-4 p-6 h-full">
        <div className="flex justify-between pb-4">
          <h2 className="font-bold text-2xl">Produkter</h2>
          <button onClick={() => navigate("/admin/products/new")}
          className="border-2 border-black py-2 px-4 rounded-lg font-bold 
                              shadow-lg bg-gray-200 hover:bg-gray-300
                              active:bg-gray-400 transition-all duration-200"
            >Ny produkt
          </button>
        </div>
      {products.length === 0 ? (
        <p>Laddar produkter...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-500 border-b">
          <thead>
            <tr className="bg-slate-200">
              <th className="border border-gray-400 px-4 py-2">Titel</th>
              <th className="border border-gray-400 px-4 py-2">ISBN</th>
              <th className="border border-gray-400 px-4 py-2">Pris</th>
            </tr>
          </thead>
          <tbody>
            {products.map((products) => (
              <tr key={products.id} className="text-center odd:bg-gray-100 even:bg-white">
                <td className="px-4 border-x border-gray-500 py-2">{products.title}</td>
                <td className="border-x border-gray-500">{products.isbn}</td>
                <td className="border-x border-gray-500">{products.price}</td>
              </tr>  
            ))}
          </tbody>
        </table>
          
      )}
        </div>
      </div>
    </div>
  );
}


export default AdminPage;