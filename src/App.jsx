import Home from "./pages/Home/Home";
import {BrowserRouter, Routes, Route } from "react-router";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductGrid from "./components/Products/ProductGrid";
import SearchResults from "./components/SearchResults/SearchResults";
import AdminPage from "./pages/AdminPage/AdminPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";


function App() {
  return(
    <BrowserRouter>
    <Routes>

      <Route index element={ <Home/> } />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/" element={<ProductGrid />} />
      <Route path="/admin/products" element={<AdminPage />} />
      <Route path="/admin/products/new" element={<AddProductPage />} />
      
    </Routes>
     
    </BrowserRouter>
  )

}



export default App;