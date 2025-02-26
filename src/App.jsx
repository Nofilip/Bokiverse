import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/header/header';
import NavBar from './components/NavBar/NavBar';
import ProductGrid from './components/Products/ProductGrid';



function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/tasks")
      .then(resp => resp.json())
      .then(data => {
        setProducts(data);
      })
      
  }, []);
  


  
  return (
    <>
      <Header />

      <NavBar />

      <ProductGrid products={products} />
    </>
  );
}

export default App;
