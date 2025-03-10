import Home from "./pages/Home/Home";
import {BrowserRouter, Routes, Route } from "react-router";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductGrid from "./components/Products/ProductGrid";
import SearchResults from "./components/SearchResults/SearchResults";


function App() {
  return(
    <BrowserRouter>
    <Routes>

      <Route index element={ <Home/> } />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/" component={ProductGrid} />
    </Routes>
     
    </BrowserRouter>
  )

}



export default App;