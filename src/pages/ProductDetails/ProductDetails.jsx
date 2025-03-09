import {useState, useEffect} from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { faHeart, } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function ProductDetails() {
  const { slug } = useParams(); 
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${slug}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Produkten hittades inte");
        }
        return resp.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => setError(error.message));
  }, [slug]);

  // Andra useEffect: Hämtar alla produkter och filtrerar på samma författare
  useEffect(() => {
    // För att vänta tills produkt är hämtad och 'author' är tillgänglig
    if (product) {
      fetch('http://localhost:8000/api/products')
        .then((resp) => resp.json())
        .then((data) => {
          // Filtrera produkter med samma författare, men utesluta den aktuella produkten
          const filteredProducts = data.filter(p => p.author === product.author && p.id !== product.id);
          
          const limitedProducts = filteredProducts.slice(0, 3);

          console.log("Limited Products:", limitedProducts); // Logga för att se resultaten
          setRelatedProducts(limitedProducts);
        })
        .catch((error) => console.error('Fel vid hämtning av relaterade produkter:', error));
    }
  }, [slug, product]); // Vänta på att både 'slug' och 'product' ska vara tillgängliga

  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Laddar...</p>;
  return(
    <div>
      <Header />
      <NavBar />
      <section className="grid col-span-1">
        
          <div className="border p-4 bg-slate-100 rounded-lg grid sm:grid-cols-2" key={product.id}>
            <div className="relative flex items-center justify-center sm:w-72 sm:mx-auto">
              <img className="w-full h-full object-cover rounded-lg relative" src={product.image} alt={product.title} />
              <a href="http://"></a><FontAwesomeIcon icon={faHeart} className="text-2xl absolute bottom-4 right-4 cursor-pointer" />
            </div>
            <div className="p-4">
              <h1 className="text-3xl font-bold mt-2 sm:text-4xl">{product.title}</h1>
              <p className="text-gray-400 text-sm mt-2">{product.author}</p>
              <p className="text-sm mt-4">{product.description}</p>
              <p className="text-1xl font-semibold mt-6">{product.price} SEK</p>
              <button className="border py-2 w-full sm:w-1/2 bg-slate-200 rounded-lg hover:bg-slate-300 transition shadow-md mt-6">
                Lägg i varukorg         
              </button>  
            </div>      
          </div>      
      </section>
            <section className="hidden sm:block">
              <h2 className="text-2xl font-semibold my-4 text-center">Liknande böcker</h2>
              <div className="grid grid-cols-3 gap-6">          
                {relatedProducts.map(product => (
                  <Link to={`/product/${product.slug}`} onClick={() => window.scrollTo(0, 0)} key={product.id} className="border p-4 bg-slate-100 rounded-lg block hover:shadow-lg transition">       
                    <div className="relative">
                      <img className="w-full rounded-lg relative" src={product.image} alt={product.title} />
                      <FontAwesomeIcon icon={faHeart} className="text-2xl absolute bottom-2 right-2 cursor-pointer" />
                    </div>
                    <div className="p-4">
                      <h1 className="text-3x1 font-bold mt-2">{product.title}</h1>
                      <p className="text-gray-400 text-sm mt-2">{product.author}</p>
                      <p className="text-sm mt-4 hidden">{product.description}</p>
                      <p className="text-1xl font-semibold mt-6">{product.price} SEK</p>
  
                    </div>
                
                    </Link>
                  ))}
                </div>
            </section>   
    </div>
  );


}

export default ProductDetails;