import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function ProductGrid({ products }) {
  return (
    <section className="grid justify-center sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 bg-slate-50 p-2">
      
      {products.map((product) => (
        console.log(product.slug),
        <div className="border p-2 bg-slate-100 rounded-lg flex flex-col h-full" key={product.id}>
          <div className="relative">
            <Link to={`/product/${product.slug}`}>
              <img className="w-full" src={product.image} alt={product.title} />
            </Link>
            <a href="http://"></a><FontAwesomeIcon icon={faHeart} className="text-2xl absolute bottom-2 right-2 cursor-pointer" />
          </div>
              <h1 className="font-bold">
                <Link to={`/product/${product.slug}`}>{product.title}</Link>
              </h1>
          <p className="text-gray-500 font-light"> av {product.author}</p>
          <p className="font-serif hidden md:block">{product.description}</p>
          <span className="mt-auto">{product.price} SEK</span>
        </div>
        
      ))}
    </section>
  );
}



export default ProductGrid;