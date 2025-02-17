import './App.css'
import Header from './components/header/header';
import NavBar from './components/NavBar/NavBar';
import ProductGrid from './components/Products/ProductGrid';



function App() {

  const Products = [];

  fetch("http://localhost:8000/api/tasks")
    .then(resp => resp.json())
    .then(Products => {
      console.log(Products);
    })
  
  return (
    <>
      <Header />

      <NavBar />

      <ProductGrid Products={Products} />
    </>
  );
}

export default App;
