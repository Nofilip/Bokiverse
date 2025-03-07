import { useState, useEffect } from 'react';

import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import ProductGrid from '../../components/Products/ProductGrid';
import HiddenSection from '../../components/HiddenSection/HiddenSection';

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then(resp => resp.json())
      .then(data => {
        setProducts(data);
      })
      
  }, []);
  
  return (
    <>
      <Header />
   
      <NavBar />

      <Hero />

      <HiddenSection />

      <ProductGrid products={products} />

      

    </>
  );
}

export default Home;
