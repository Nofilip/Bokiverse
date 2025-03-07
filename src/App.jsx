import Home from "./pages/Home/Home";
import {BrowserRouter, Routes, Route } from "react-router";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductGrid from "./components/Products/ProductGrid";


function App() {
  return(
    <BrowserRouter>
    <Routes>

      <Route index element={ <Home/> } />

      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/" component={ProductGrid} />
    </Routes>
     
    </BrowserRouter>
  )

}



export default App;