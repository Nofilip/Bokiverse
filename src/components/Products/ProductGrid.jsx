function ProductGrid({ products }) {
  return (
    <section className="grid justify-center sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
      {products.map((product) => (
        <div className="border p-2 bg-slate-100 rounded-lg flex flex-col h-full" key={product.id}>
          <img className="w-full" src={product.image} alt={product.title} />
          <h1 className="font-bold">{product.title}</h1>
          <p className="text-gray-500 font-light"> av {product.author}</p>
          <p className="font-serif hidden md:block">{product.description}</p>
          <span className="mt-auto">{product.price} SEK</span>
        </div>
      ))}
    </section>
  );
}


export default ProductGrid;